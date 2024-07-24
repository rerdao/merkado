import {red} from '@material-ui/core/colors';
import {createTheme} from '@material-ui/core/styles';
import '@fontsource/akaya-telivigala';
import '@fontsource/sora';

// A custom theme for this app
const theme = createTheme({
    typography: {
        fontFamily: '"Rubik", sanserif',
    },
    palette: {
        primary: {
            main: '#d05700',
        },
        secondary: {
            main: '#7a54eb',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'radial-gradient(rgb(189, 1, 1) 0%, rgb(189, 1, 1) 16%, transparent 42%)',
        },
    },
    overrides: {
        MuiLinearProgress: {
            root: {
                height: '10px',
                borderRadius: '10px',
            },
            bar2Buffer: {
                backgroundColor: 'rgb(225, 142, 19)',
            },
            dashedColorPrimary: {
                backgroundSize: '12px 12px',
                marginTop: '-2px',
                backgroundImage:
                    'radial-gradient(rgb(189, 1, 1) 0%, rgb(189, 1, 1) 16%, transparent 42%)',
            },
        },
        MuiIconButton: {
            label: {
                color: '#d05700',
            },
        },
        MuiAvatar: {
            colorDefault: {
                backgroundColor: '#d05700',
                color: 'white',
            },
        },
        MuiListItemIcon: {
            root: {
                color: '#d05700',
            },
        },
    },
});

export default theme;
