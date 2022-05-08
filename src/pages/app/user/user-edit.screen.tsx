import { Card, Container, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loading, Page } from '../../../components';
import UserForm from '../../../components/forms/user-form';
import { UserService } from '../../../services/user.service';
import { RootState } from '../../../store';

interface Props {}

export const UserEditScreen: React.FC<Props> = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { loading } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        UserService.fetchById(String(id), (isValid, msg) => {
            if (!isValid) {
                toast(
                    msg,
                    {
                        autoClose: 1500,
                        type: 'error',
                    }
                );
                navigate('/app/user');
            }
        });
    }, [id]);

    return (
        <Page title="Alterar usuário">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Alterar usuário
                    </Typography>
                </Stack>
                <When condition={loading?.fetchById}>
                    <Loading />
                </When>
                <When condition={!loading?.fetchById}>
                    <Card sx={{ p: 3 }}>
                        <UserForm isFromEdit={true} />
                    </Card>
                </When>
            </Container>
        </Page>
    )
}