import React from 'react';
import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown/with-html';
import Layout from '../../components/MyLayout';
import { PostType } from '../../types';
import { NextPage, NextPageContext } from 'next';
import CommentSection from '../../components/CommentSection';

type Props = {
  article: PostType;
};

const Post: NextPage<Props> = props => {
  const { article } = props;

  return (
    <Layout>
      <h1>{article.title}</h1>
      <h2>Author: {article.by}</h2>
      <h3>Score: {article.score}</h3>
      {article.url && (
        <h3>
          Link:{' '}
          <a href={`${article.url}`} target='_blank'>
            {article.url}
          </a>
        </h3>
      )}
      {article.text !== undefined && (
        <React.Fragment>
          <h3>Post:</h3>
          <Markdown source={article.text} escapeHtml={false} />
        </React.Fragment>
      )}
      {article.descendants > 0 && (
        <CommentSection collapsibleName='Comments' commentIDs={article.kids || []} />
      )}
      <style jsx global>{`
        .markdown {
          font-family: 'Arial';
        }

        .markdown a {
          text-decoration: none;
          color: blue;
        }

        .markdown a:hover {
          opacity: 0.6;
        }

        .markdown h3 {
          margin: 0;
          padding: 0;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          font-family: 'Arial';
        }

        p {
          line-height: 1.3rem;
        }
      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const { id } = query;
  console.log(id);
  const article = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then(res => res.json())
    .catch(e => console.log(e));

  return Object.assign(
    {},
    {
      article
    }
  );
};

export default Post;
