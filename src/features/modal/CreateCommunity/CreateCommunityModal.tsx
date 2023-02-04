import {
  ModalOverlay,
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  ModalFooter,
  Button,
  Box,
  Input,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import React, { PropsWithChildren, useState } from "react";
import { IconType } from "react-icons";
import { BsFillPersonFill } from "react-icons/bs";
type CreateCommunityModalProps = {
  open: boolean;
  handleOnClose: () => void;
} & PropsWithChildren;

const C_TYPES: {
  name: "private" | "public" | "restricted";
  placeholder: string;
  desc: string;
  icon: IconType;
}[] = [
  {
    name: "public",
    placeholder: "Public",
    desc: "Anyone can view, post and comments to this community",
    icon: BsFillPersonFill,
  },
  {
    name: "restricted",
    placeholder: "Restricted",
    desc: "Anyone can view, but only approved user can post in this community",
    icon: BsFillPersonFill,
  },
  {
    name: "private",
    placeholder: "Private",
    desc: "Only approve user can view and submit to this community",
    icon: BsFillPersonFill,
  },
];
const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
  open,
  handleOnClose,
}) => {
  const [communityName, setCommunityName] = useState("");
  const [communityType, setCommunityType] = useState<
    "public" | "restricted" | "private"
  >("public");
  const CHARACTER_LENGTHS = 21;
  const [characterRemains, setCharacterRemain] = useState(CHARACTER_LENGTHS);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > CHARACTER_LENGTHS) return;
    setCommunityName(e.target.value);
    setCharacterRemain(CHARACTER_LENGTHS - e.target.value.length);
  };
  return (
    <>
      <Modal isOpen={open} onClose={handleOnClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display={"flex"}
            flexDirection={"column"}
            fontSize={15}
            padding={3}
            justifyContent={"center"}
          >
            Create a Community
          </ModalHeader>
          <ModalCloseButton />
          <Box pl={3} pr={3}>
            <ModalBody
              mb={6}
              display={"flex"}
              padding="10px 0"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize={15} fontWeight="600">
                Name
              </Text>
              <Text fontSize={11} color="gray.500">
                Community name including capitalization cannot be changed
              </Text>
              <Text
                position={"relative"}
                top={"28px"}
                left="10px"
                width={"20px"}
                color="gray.400"
              >
                r/
              </Text>
              <Input
                position={"relative"}
                size={"sm"}
                pl={"22px"}
                onChange={handleOnChange}
                value={communityName}
              />
              <Text
                fontSize={"9pt"}
                color={characterRemains === 0 ? "red" : "gray.500"}
              >
                {characterRemains} Characters remaining{" "}
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={"600"} fontSize={15}>
                  Community Type
                </Text>
                <Stack spacing={2}>
                  {C_TYPES.map((value, idx) => (
                    <>
                      <Checkbox
                        key={idx}
                        onChange={() => setCommunityType(value.name)}
                        isChecked={value.name === communityType}
                        name={value.name}
                      >
                        <Flex align="center">
                          <Text fontSize={"10pt"} mr={1}>
                            {value.placeholder}
                          </Text>
                          <Text fontSize={"8pt"} color="gray.500" pt={0.5}>
                            {value.desc}
                          </Text>
                        </Flex>
                      </Checkbox>
                    </>
                  ))}
                </Stack>
              </Box>
            </ModalBody>
          </Box>
          <ModalFooter>
            <Button colorScheme={"blue"} mr={"3"} onClick={handleOnClose}>
              Close
            </Button>
            <Button variant="ghost">Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
