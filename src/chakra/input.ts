import {ComponentStyleConfig} from "@chakra-ui/theme"
export const Input:ComponentStyleConfig={

    variants:{
  
        filled:{    
        mb:2,
        fontSize:"10pt",
        _placeholder:{ color: "gray.500" },
        _hover:{ bg: "white", border: "1px solid", borderColor: "blue.500" },
        _focus:{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        },
        bg:"gray.50"
        },
    },
  
}