import React from 'react';  
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Card, Link, Container, Typography } from '@mui/material';

import AuthLayout from '../layout/auth';

import {
    Page,
    MHidden,
    RegisterForm,
} from '../components';

const RootStyle = styled(Page)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2)
}));
  
const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(12, 0)
}));
  
const Register: React.FC = () => {
    return (
        <RootStyle title="Registrar">
            <AuthLayout>
                Já tem uma conta? &nbsp;
                <Link underline="none" variant="subtitle2" component={RouterLink} to="/login">
                    Acesse aqui
                </Link>
            </AuthLayout>

            <MHidden width="mdDown">
                <SectionStyle sx={{
                    p: 3,
                }}>
                    <Typography variant="h3" sx={{ mt: 10, mb: 1, color: 'text.primary' }}>
                        Register on boilerplate
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        Some awesome message
                    </Typography>
                    <img alt="register" src="/static/illustrations/register_illustration.svg" />
                </SectionStyle>
            </MHidden>

            <Container>
                <ContentStyle>
                    <Box sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Cadastrar-se
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Para poder acessar o painel é necessário que informe todos os dados solicitados abaixo, certifique-se de que todos os dados inseridos estejam corretos.
                        </Typography>
                    </Box>

                    <RegisterForm />

                    <Typography variant="body2" align="center" sx={{ color: 'text.secondary', mt: 3 }}>
                        Ao se register, você estará concordando com O &nbsp;
                        <Link underline="always" sx={{ color: 'text.primary' }}>
                            Termos de Uso
                        </Link>
                        &nbsp;e&nbsp;
                        <Link underline="always" sx={{ color: 'text.primary' }}>
                            Termos e Privacidade
                        </Link>
                        .
                    </Typography>

                    <MHidden width="smUp">
                        <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
                            Já tem uma conta?&nbsp;
                            <Link to="/login" component={RouterLink}>
                                Acesse aqui
                            </Link>
                        </Typography>
                    </MHidden>
                </ContentStyle>
            </Container>
        </RootStyle>
    )
}

export default Register;