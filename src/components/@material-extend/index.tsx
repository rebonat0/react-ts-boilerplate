import React, { ReactNode } from 'react';
import { useMediaQuery } from '@mui/material';

interface Props {
    width: 'xsDown' |
        'smDown' |
        'mdDown' |
        'lgDown' |
        'xlDown' |
        'xsUp' |
        'smUp' |
        'mdUp' |
        'lgUp' |
        'xlUp',
    children: ReactNode,
}


const MHidden: React.FC<Props> = (props) => {
    const { width } = props;

    const breakpoint = width?.substring(0, 2);

    const hiddenUp = useMediaQuery((theme: any) => theme.breakpoints.up(breakpoint));
    const hiddenDown = useMediaQuery((theme: any) => theme.breakpoints.down(breakpoint));

    if (width?.includes('Down')) {
        return hiddenDown ? <></> : <>{props.children}</>;
    }

    if (width?.includes('Up')) {
        return hiddenUp ? <></> : <>{props.children}</>;
    }

    return <></>;
}

export default MHidden;