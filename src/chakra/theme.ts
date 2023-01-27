import { extendBaseTheme, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
export const theme =extendTheme({
    color:{
        brand:{
            100:'#ff3c00'
        }

    },
    styles:{
        global:()=>({
            body:{
                bg:"gray.200"
            }
        })
    },
    components:{
        
    },

    fonts:{
        body:'Open Sans, sans-serif'
    }
})