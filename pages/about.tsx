import React from 'react';
import Markdown from 'react-markdown';
import Layout from '../components/MyLayout';
import { NextPage } from 'next';

const About: NextPage = () => {
  return (
    <Layout>
      <Markdown
        source={`
# Next-TS

Hacker News Mock API, bootstrapped together with [Next.js](https://nextjs.org)

## Description

This project is a mixture of basic concepts around using TypeScript on top of NextJS and some simple API interaction.

The HackerNews API is incredibly simple and easy to get started with; check it out [here](https://github.com/HackerNews/API).

Current Features:

- View top 500 articles
- View comments
- View nested comments
			`}
      />
      <style jsx>{`
        h2,
        h4,
        a {
          font-family: 'Arial';
        }

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
      `}</style>
    </Layout>
  );
};

export default About;
