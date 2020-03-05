import { useEffect, useState } from 'react';
import fetch from 'isomorphic-unfetch';
import { CommentType } from '../types';
import Markdown from 'react-markdown/with-html';
import CommentSection from './CommentSection';

type Props = {
  commentId: number;
};

const Comment: React.FunctionComponent<Props> = props => {
  const { commentId } = props;

  const [comment, setComment] = useState<CommentType | undefined>(undefined);

  const [err, setErr] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`)
      .then(res => res.json())
      .then(res => setComment(res))
      .catch(e => setErr(e.message));
  });

  if (err) {
    return (
      <li>
        <p>Err message: {err}</p>
      </li>
    );
  }

  if (!comment) {
    return (
      <li>
        <p>- Loading -</p>
      </li>
    );
  }

  return (
    <li>
      <h4>{comment.by}</h4>
      <Markdown source={comment.text} escapeHtml={false} />
      {(comment.kids || []).length > 0 && (
        <CommentSection collapsibleName='Replies' commentIDs={comment.kids} />
      )}
      <hr />
      <style jsx>{`
        div,
        h4,
        p {
          font-family: 'Arial';
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
      `}</style>
    </li>
  );
};

export default Comment;
