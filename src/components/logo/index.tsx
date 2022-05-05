import React from 'react';
import { Box } from '@mui/material';

interface Props {
    sx?: Object,
};

const Logo: React.FC<Props> = ({ sx }) => {
    return <Box component="img" src="/static/logo.svg" sx={{ width: 64, height: 64, ...sx }} />;
}

export default Logo;