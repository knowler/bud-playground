import {ThemeProvider as BaseThemeProvider} from '@theme-ui/core';
import {theme} from './theme';

export const ThemeProvider = ({children}) => <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
