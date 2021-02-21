import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;
            white: string;
            dark: string;
            background: string;
        };
        font: {
            family: {
                karla: string;
                spectral: string;
            };
            sizes: {
                large: string;
                medium: string;
                normal: string;
                small: string;
            };
        };
    }
}
