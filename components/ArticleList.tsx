import { useState, useEffect } from 'react';
import PostLink from './PostLink';
import { PostType } from '../types';

const ArticleList: React.FunctionComponent<{ articleIDs: number[] }> = ({ articleIDs }) => {
  const bufferSize = 50; // loads 50 articles at a time
  const [currentListIdx, setCurrentListIdx] = useState<number>(0);
  const [articles, setArticles] = useState<PostType[]>([]);
  const [err, setErr] = useState<string | undefined>(undefined);

  useEffect(() => {
    articleIDs.slice(currentListIdx, currentListIdx + bufferSize).map(id =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(res => res.json())
        .then(res => setArticles(prev => [...prev, res]))
        .catch(e => setErr(e.message))
    );
  }, [currentListIdx]);

  if (err) {
    return <div>{'--- Error Occurred ---'}</div>;
  }

  if (articles.length === 0) {
    return <div>{'--- Loading ---'}</div>;
  }

  return (
    <div>
      <ul>
        {articles.map(article => (
          <PostLink post={article} />
        ))}
      </ul>
      <button type='button' onClick={() => setCurrentListIdx(prev => prev + bufferSize)}>
        <p>Load more...</p>
      </button>
      <style jsx global>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 10px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default ArticleList;
