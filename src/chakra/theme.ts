import { ThemeOverride, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import { Button } from "./button";
let base:ThemeOverride<{}>;

base = {
    
    colors: {
        brand: {
            100: '#ff3c00'
        }
    },
    styles: {
        global: () => ({
            body: {
                bg: "gray.200"
            }
        })
    },
    components: {
        Button
    },

    fonts: {

        body: 'Open Sans, sans-serif',

    }
    
};

export const theme =extendTheme(base)