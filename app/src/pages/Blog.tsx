import { FC, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { BlogProps } from '../api/Notion';

const Blog: FC = () => {
  const [posts, setPosts] = useState<BlogProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <Layout>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Blog;
