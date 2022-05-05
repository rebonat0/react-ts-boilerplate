import { ReactNode, useState } from 'react';
import { styled } from '@mui/material/styles';

import DashboardNavbar from './navbar';
import DashboardSidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
    }
}));

interface Props {
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <RootStyle>
                <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
                <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
                <MainStyle>
                    <Outlet />
                </MainStyle>
            </RootStyle>
        </>
    );
}

export default DashboardLayout;