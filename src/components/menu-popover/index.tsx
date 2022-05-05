import React from 'react';
import { Popover, PopoverProps } from '@mui/material';
import { ArrowStyle } from './styles';

interface Props extends PopoverProps {
    sx: Object,
}

const MenuPopover: React.FC<Props> = (props) => {
    const { children, sx } = props;

    return (
        <Popover
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            PaperProps={{
                sx: {
                    mt: 1.5,
                    ml: 0.5,
                    overflow: 'inherit',
                    boxShadow: (theme: any) => theme?.customShadows?.z20,
                    border: (theme) => `solid 1px ${theme.palette.grey[500]}`,
                    width: 200,
                    ...sx
                }
            }}
            {...props}
        >
            <ArrowStyle className="arrow" />

            {children}
        </Popover>
    );
}

export default MenuPopover;