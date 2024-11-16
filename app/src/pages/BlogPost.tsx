import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { BlogProps } from '../api/Notion';

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogProps | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${slug}`);
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <Layout>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </Layout>
  );
};

export default BlogPost;
