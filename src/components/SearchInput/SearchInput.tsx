import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";

type SearchInputProps = {} & PropsWithChildren;

const SearchInput: React.FC<SearchInputProps> = () => {
  return (<Flex>
  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Search Reddit' />
  </InputGroup>

  </Flex>);
};
export default SearchInput;
