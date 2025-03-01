import NotFoundUrl from '../../../assets/images/404.gif';
import { BackgroundImage, Box, Button, Text, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../features/auth/hooks/useAuth';

const NotFound = () => {
  const { isAuthenticated } = useAuth();
  
  return <Box w={800} m="0 auto" p="70px 0" ta="center">
    <Title fz={70} fw={500}>
      404
    </Title>

    <BackgroundImage src={NotFoundUrl} h={400} bgp="center" m={20} />

    <Box>
      <Text c="dimmed" size="lg" ta="center">
        Look like you&apos;re lost the page you are looking for not available!
      </Text>

      <Button
        variant="subtle"
        size="md"
        component={Link}
        to={isAuthenticated ? "/" : "/auth"}
      >
        Go to {isAuthenticated ? 'Dashboard' : 'Auth'}
      </Button>
    </Box>
  </Box>
};

export default NotFound;
