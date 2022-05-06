import { Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

import { Page } from '../../../components';
import { UserList } from '../../../components/lists/user-list';

interface Props {}

export const UserListScreen: React.FC<Props> = () => {
    return (
        <Page title="User list">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Users list
                    </Typography>
                    <Button
                        variant="contained"
                        component={RouterLink}
                        to="/app/user/new"
                        startIcon={<Icon icon={plusFill} />}
                    >
                        Adicionar novo
                    </Button>
                </Stack>

                <UserList />
            </Container>
        </Page>
    )
}