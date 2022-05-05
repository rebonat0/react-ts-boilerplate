import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, BoxProps } from '@mui/material';

interface Props extends BoxProps {
    title: string,
}

const Page: React.FC<Props> = (props) => {
    const ref = React.useRef();

    return (
        <Box ref={ref} {...props}>
            <Helmet>
                <title>{props?.title}</title>
            </Helmet>
            {props?.children}
        </Box>
    )
}

export default Page;