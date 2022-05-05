import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

import { MHidden, Logo } from '../../components';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  zIndex: 9,
  lineHeight: 0,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    padding: theme.spacing(7, 5, 0, 7)
  }
}));

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <HeaderStyle>
      <Link to="/">
        <Logo />
      </Link>

      <MHidden width="smDown">
        <Typography
          variant="body2"
          sx={{
            mt: { md: -2 }
          }}
        >
          {children}
        </Typography>
      </MHidden>
    </HeaderStyle>
  );
}

export default AuthLayout;