import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Page } from '../../components';
import { PaginatorFactory } from '../../factory';
import { UserService } from '../../services/user.service'
import { RootState } from '../../store';
import { UserTypes } from '../../types'

const Home = ({  }) => {
  const { pagination: { total, items }, loading } = useSelector((state: RootState) => state.user);

  const [pagination, setPagination] = useState<PaginatorFactory<Omit<UserTypes.Model, 'id'>>>({
    page: 1,
    perPage: 1,
  });

  useEffect(() => {
    UserService.fetchMany(pagination);
  }, [pagination?.perPage, pagination?.page])
 
  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Home
          </Typography>
        </Box>
        {loading?.fetchMany && <p>loading</p>}
        {items?.map(i => <p>{i?.id}</p>)}
        <Button onClick={() => setPagination(p => ({ ...p, perPage: p.perPage + 1 }))}>
          Fetch more one
        </Button>
      </Container>
    </Page>
  )
}

export default Home
