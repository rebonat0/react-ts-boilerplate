import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';

import AuthLayout from '../layout/auth';
import {
    Page,
    MHidden,
    LoginForm,
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

const Login: React.FC = () => {
    return (
        <RootStyle title="Login">
            <AuthLayout>
                Não tem uma conta ainda? &nbsp;
                <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
                    Crie agora mesmo!
                </Link>
            </AuthLayout>

            <MHidden width="mdDown">
                <SectionStyle sx={{
                    p: 3,
                }}>
                    <Typography variant="h3" sx={{ mt: 10, mb: 1, color: 'text.primary' }}>
                        Dashboard boilerplate
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 2 }}>
                        My Dashboard boilerplate
                    </Typography>
                    <img src="/static/illustrations/login_illustration.svg" alt="login" />
                </SectionStyle>
            </MHidden>

            <Container maxWidth="sm">
                <ContentStyle>
                    <Stack sx={{ mb: 5 }}>
                        <Typography variant="h4" gutterBottom>
                            Acessar sua conta
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>
                            Informe suas credenciais corretamente abaixo
                        </Typography>
                    </Stack>

                    <LoginForm />

                    <MHidden width="smUp">
                        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                            Não tem uma conta ainda?&nbsp;
                            <Link variant="subtitle2" component={RouterLink} to="register">
                                Crie agora mesmo!
                            </Link>
                        </Typography>
                    </MHidden>
                </ContentStyle>
            </Container>

        </RootStyle>
    )
}

export default Login;