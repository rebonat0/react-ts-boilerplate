import React, { useState } from 'react';  
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import {
    Page,
    ForgotPasswordForm,
    SentIcon,
} from '../components';
import LogoOnlyLayout from '../layout/only-logo-layout';

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(12, 0),
}));

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate();
    const [alreadySent, setAlreadySent] = useState(false);
    const [sentTo, setSentTo] = useState('');

    const onFinish = (email: string) => { 
        setSentTo(email);
        setAlreadySent(true); 
    }

    return (
        <Page title='Recover password' sx={{ height: 1 }}>
            <RootStyle>
                <Container>
                    <LogoOnlyLayout>
                        <Box sx={{ maxWidth: 550, mx: 'auto' }}>
                            {!alreadySent && <>
                                <Typography variant="h3" paragraph>
                                    Esqueceu a sua senha?
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mb: 5 }}>
                                    Por favor, insira o endereço de e-mail associado à sua conta e nós lhe enviaremos um link para redefinir sua
                                    senha.
                                </Typography>

                                <ForgotPasswordForm onFinish={onFinish} />

                                <Button fullWidth size="large" sx={{ mt: 1 }} onClick={() => navigate('/login')}>
                                    Voltar
                                </Button>
                            </>}

                            {alreadySent && <>
                                <Box sx={{ textAlign: 'center' }}>
                                    <SentIcon sx={{ mb: 5, mx: 'auto', height: 160 }} />
                                    <Typography variant="h3" gutterBottom>
                                        Solicitação enviada com sucesso
                                    </Typography>
                                    <Typography>
                                        Enviamos um e-mail de confirmação para&nbsp;
                                        <strong>{sentTo}</strong>
                                        <br />
                                        Por favor verifique seu email.
                                    </Typography>

                                    <Button size="large" variant="contained" sx={{ mt: 5 }} onClick={() => navigate('/login')}>
                                        Voltar
                                    </Button>
                                </Box>
                            </>}
                        </Box>
                    </LogoOnlyLayout>
                </Container>
            </RootStyle>
        </Page>
    )
}

export default ForgotPassword;