import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { NavLink as RouterLink, matchPath, useLocation } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, List, Collapse, ListItemText, ListItemIcon, ListItemButton, ListItemButtonProps } from '@mui/material';

const ListItemStyle = styled((props: ListItemButtonProps) => <ListItemButton disableGutters {...props} />)(
    ({ theme }) => ({
        ...theme.typography.body2,
        height: 48,
        position: 'relative',
        textTransform: 'capitalize',
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(2.5),
        color: theme.palette.text.secondary,
        '&:before': {
            top: 0,
            right: 0,
            width: 3,
            bottom: 0,
            content: "''",
            display: 'none',
            position: 'absolute',
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            backgroundColor: theme.palette.primary.main
        }
    })
);

const ListItemIconStyle = styled(ListItemIcon)({
    width: 22,
    height: 22,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

interface Props {
    item: any,
    active(path: string): boolean,
}

const NavItem: React.FC<Props> = ({ item, active }) => {
    const theme = useTheme();
    const isActiveRoot = active(item.path);
    const { title, path, icon, info, children } = item;
    const [open, setOpen] = useState(false);

    const activeRootStyle = {
        color: 'primary.main',
        fontWeight: 'fontWeightMedium',
        bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
        '&:before': { display: 'block' }
    };

    const activeSubStyle = {
        color: 'text.primary',
        fontWeight: 'fontWeightMedium'
    };

    console.log('open,', open);

    if (children) {
        return (
          <>
            <ListItemStyle
              sx={{
                ...(isActiveRoot && activeRootStyle)
              }}
              onClick={() => setOpen(!open)}
            >
              <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
              <ListItemText disableTypography primary={title} />
              {info && info}
              <Box
                component={Icon}
                icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
                sx={{ width: 16, height: 16, ml: 1 }}
              />
            </ListItemStyle>
            <Collapse in={open} timeout="auto">
                <List component="div" disablePadding>
                    {children.map((item: any) => {
                        const { title, path } = item;
                        const isActiveSub = active(path);
            
                        return (
                            <RouterLink to={path} style={{
                                textDecoration: 'none',
                            }}>
                                <ListItemStyle
                                    key={title}
                                    sx={{
                                        ...(isActiveSub && activeSubStyle)
                                    }}
                                >
                                    <ListItemIconStyle>
                                        <Box
                                            component="span"
                                            sx={{
                                                width: 4,
                                                height: 4,
                                                display: 'flex',
                                                borderRadius: '50%',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                bgcolor: 'text.disabled',
                                                transition: (theme) => theme.transitions.create('transform'),
                                                ...(isActiveSub && {
                                                    transform: 'scale(2)',
                                                    bgcolor: 'primary.main'
                                                })
                                            }}
                                        />
                                    </ListItemIconStyle>
                                    <ListItemText disableTypography primary={title} />
                                </ListItemStyle>
                            </RouterLink>
                        );
                    })}
                </List>
            </Collapse>
          </>
        );
      }
    
    return (
        <RouterLink to={path} style={{
            textDecoration: 'none',
        }}>
            <ListItemStyle
                sx={{
                    ...(isActiveRoot && activeRootStyle)
                }}
            >
                <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
                <ListItemText disableTypography primary={title} />
                {info && info}
            </ListItemStyle>
        </RouterLink>
    );
}

interface SectionProps {
    navConfig: any
}

const NavSection: React.FC<SectionProps> = ({ navConfig, ...other}) => {
    const { pathname } = useLocation();
    const match = (path: any) => (path ? !!matchPath({ path, end: false }, pathname) : false);

    return (
        <Box {...other}>
            <List disablePadding>
                {navConfig.map((item: any) => (
                    <NavItem key={item.title} item={item} active={match} />
                ))}
            </List>
        </Box>
    );
};

export default NavSection;
