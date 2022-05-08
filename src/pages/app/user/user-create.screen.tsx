import { Card, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { Page } from '../../../components';
import UserForm from '../../../components/forms/user-form';

interface Props {}

export const UserCreateScreen: React.FC<Props> = () => {
    return (
        <Page title="Cadastrar usuário">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Criar um novo usuário
                    </Typography>
                </Stack>
                <Card sx={{ p: 3 }}>
                    <UserForm isFromEdit={false} />
                </Card>
            </Container>
        </Page>
    )
}