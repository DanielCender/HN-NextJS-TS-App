import Layout from '../components/MyLayout';
import ArticleList from '../components/ArticleList';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

const Index: NextPage<{ articles: number[] }> = props => {
  return (
    <Layout>
      <h1>Y Combinator - Hacker News</h1>
      <ArticleList articleIDs={props.articles || []} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');

  const data: string[] = await res.json();

  console.log(data.length);

  return Object({
    articles: data
  });
};
export default Index;
