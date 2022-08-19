import { extendTheme } from '@chakra-ui/react';

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
    colors: {
        primary: '#005B96',
        secondary: '#1BC5BD',
        lightBg: '#F1FAFE',
        black: '#16161D',
    },
    fonts,
});

export default theme;
