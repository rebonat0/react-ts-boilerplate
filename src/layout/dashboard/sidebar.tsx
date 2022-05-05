import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Drawer, Typography, Avatar, Stack, Link } from '@mui/material';

import { 
    MHidden,
    Logo,
    Scrollbar,
    NavSection,
} from '../../components';
import sidebarConfig from './sidebar-config';
import palette from '../../theme/palette';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
        flexShrink: 0,
        width: DRAWER_WIDTH
    }
}));

const AccountStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 2.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.grey[200]
}));

interface Props {
    isOpenSidebar: boolean,
    onCloseSidebar(): void,
};

const DashboardSidebar: React.FC<Props> = ({ isOpenSidebar, onCloseSidebar }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        if (isOpenSidebar) {
            onCloseSidebar();
        }
    }, [pathname]);

    const renderContent = (
        <Scrollbar
            sx={{
                height: '100%',
                overflowY: "auto",
                '& .simplebar-content': { height: '100%', display: 'flex', flexDirection: 'column' }
            }}
        >
            <Box sx={{ px: 2.5, py: 3 }}>
                <Box component={RouterLink} to="/" sx={{ display: 'inline-flex' }}>
                    <Logo />
                </Box>
            </Box>

            <Box sx={{ mb: 5, mx: 2.5 }}>
                <Link underline="none" component={RouterLink} to='/'>
                    <AccountStyle>
                        <Avatar src={'ar'} alt="photoURL" />
                        <Box sx={{ ml: 2 }}>
                            <Typography variant="subtitle2" sx={{ color: 'text.primary' }}>
                                John Doe
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Administrador
                            </Typography>
                        </Box>
                    </AccountStyle>
                </Link>
            </Box>

            <NavSection navConfig={sidebarConfig} />

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
                <Stack
                    alignItems="center"
                    spacing={3}
                    sx={{
                        p: 2.5,
                        pt: 2,
                        borderRadius: 2,
                        position: 'relative',
                        bgcolor: 'grey.200'
                    }}
                >
                    <Avatar
                        style={{
                            width: 64,
                            height: 64,
                            borderRadius: "50%",
                            marginTop: -50,
                        }}
                        variant="square"
                        src={'ar'}
                        alt={"logo"}
                    />

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant='h6'>
                            My Dashboard
                            
                        </Typography>
                        <Typography variant='body2' sx={{ color: palette.primary.dark }}>
                            My Business name
                        </Typography>
                    </Box>

                    <Button
                        fullWidth
                        variant='contained'
                        onClick={() => {}}
                    >
                        Show
                    </Button>

                </Stack>
            </Box>

        </Scrollbar>
    );

    return (
        <RootStyle>
            <MHidden width="lgUp">
                <Drawer
                    open={isOpenSidebar}
                    onClose={onCloseSidebar}
                    PaperProps={{
                        sx: { width: DRAWER_WIDTH }
                    }}
                >
                    {renderContent}
                </Drawer>
            </MHidden>

            <MHidden width="lgDown">
                <Drawer
                    open
                    variant="persistent"
                    PaperProps={{
                        sx: {
                        width: DRAWER_WIDTH,
                        bgcolor: 'background.default'
                        }
                    }}
                >
                    {renderContent}
                </Drawer>
            </MHidden>
        </RootStyle>
    );
}

export default DashboardSidebar;