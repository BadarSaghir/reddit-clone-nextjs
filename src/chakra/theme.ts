import { ThemeOverride, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import { Button } from "./button";
import {Input} from "./input"
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
        Button,
        Input
    },

    fonts: {

        body: 'Open Sans, sans-serif',

    }
    
};

export const theme =extendTheme(base)