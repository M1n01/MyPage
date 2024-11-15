import { FC, useState } from 'react';
import { AppShell, Stack, useMantineTheme, Avatar, Title, Text, Group, Button } from '@mantine/core';
import { IconBrandGithub, IconBrandX, IconHeart } from '@tabler/icons-react';

const Navbar: FC = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell.Navbar p="md" hidden={!opened}>
      <Stack gap='xl'>
        {/* Profile Section */}
        <Stack align="center" gap='xs'>
          <Avatar size="lg" src="https://avatars.githubusercontent.com/u/139426" />
          <Title order={3}>Abe Minato</Title>
          <Text size="sm" c='dimmed'>Frontend Developer</Text>
        </Stack>

        {/* Bio Section */}
        <Stack gap='xs'>
          <Text size="sm">I'm a frontend developer who loves to build web applications with React and TypeScript.</Text>
        </Stack>

        {/* Social Links */}
        <Group gap='xs'>
          <Button
            variant="subtle"
            leftSection={<IconBrandGithub size={20} />}
            component="a"
            href="https://github.com/yourusername"
          >
            GitHub
          </Button>
          <Button
            variant="subtle"
            leftSection={<IconBrandX size={20} />}
            component="a"
            href="https://twitter.com/yourusername"
          >
                X
          </Button>

          {/* Donation Button */}
          <Button
            variant="light"
            color="pink"
            leftSection={<IconHeart size={20} />}
            justify='center'
            onClick={() => window.open('your-donation-link', '_blank')} // Add your donation link
          >
            Support My Work
          </Button>
        </Group>
      </Stack>
    </AppShell.Navbar>
  );
};

export default Navbar;
