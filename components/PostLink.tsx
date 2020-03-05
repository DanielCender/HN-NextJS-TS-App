import Link from 'next/link';
import { PostType } from '../types';

const PostLink: React.FunctionComponent<{ post: PostType }> = ({ post }) => (
  <li key={post.id}>
    <Link href='/p/[id]' as={`/p/${post.id}`}>
      <a>
        {post.title}
        {post.text && ` - Text Embedded`}
      </a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default PostLink;
