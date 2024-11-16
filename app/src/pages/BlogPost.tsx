import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Skeleton, Text, Title, Stack, Badge, Group } from '@mantine/core';
import { IconCalendar, IconTag } from '@tabler/icons-react';
import Layout from '../components/Layout';
import { type BlogProps, getPostBySlug } from '../api/notion';

const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const fetchedPost = await getPostBySlug(slug);
        setPost(fetchedPost);
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return (
    <Layout>
      <Container size="md" py="xl">
        <Skeleton height={50} mb="xl" />
        <Skeleton height={30} mb="md" />
        <Skeleton height={400} />
      </Container>
    </Layout>
  );

  if (!post) return (
    <Layout>
      <Container size="md" py="xl">
        <Title order={1}>Post not found</Title>
        <Text>The requested post could not be found.</Text>
      </Container>
    </Layout>
  );

  return (
    <Layout>
      <Container size="md" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">{post.title}</Title>

          <Group mb="xl">
            <Badge 
              leftSection={<IconCalendar size={14} />}
              variant="light"
            >
              {new Date(post.publishedAt).toLocaleDateString()}
            </Badge>
            {post.tags?.map(tag => (
              <Badge 
                key={tag} 
                leftSection={<IconTag size={14} />}
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </Group>

          {post.description && (
            <Text size="lg" color="dimmed" mb="xl">
              {post.description}
            </Text>
          )}
        </div>

        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Stack>
    </Container>
    </Layout>
  );
};

export default BlogPost;
