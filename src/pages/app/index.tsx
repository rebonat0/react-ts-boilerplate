import { Box, Container, Typography } from '@mui/material';
import { Page } from '../../components';

const Home = ({  }) => {

  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Home
          </Typography>
        </Box>
      </Container>
    </Page>
  )
}

export default Home
