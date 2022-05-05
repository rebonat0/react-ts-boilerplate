import { Box, CircularProgress, Typography } from '@mui/material';
import React, { memo } from 'react';

const Loading: React.FC = () => {
    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center', mt: '10%', mb: '10%' }} >
            <CircularProgress color="primary" sx={{ mb: 3 }} />
            <Typography sx={{ color: 'text.secondary' }}>
                Carregando, aguarde...
            </Typography>
        </Box>
    )
};

export default memo(Loading);