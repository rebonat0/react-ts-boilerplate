import { ReactNode, useMemo } from 'react';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material/styles';

import shape from './shape';
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import { customShadows } from './shadows';

interface Props {
  children: ReactNode,
};

const ThemeConfig: React.FC<Props> = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape,
      typography,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions as ThemeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default ThemeConfig;