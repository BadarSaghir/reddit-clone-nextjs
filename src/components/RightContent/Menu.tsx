
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex,Icon,Menu as NavMenu, MenuButton, MenuDivider, MenuItem, MenuList } from "@chakra-ui/react";
import {  signOut, User } from "firebase/auth";
import React, { useReducer } from "react";
import {FaRedditSquare} from "react-icons/fa"
import {VscAccount} from "react-icons/vsc"
import {CgProfile} from "react-icons/cg"
import { MdOutlineLogin} from "react-icons/md"
import {  useAppDispatch } from "../../hooks/hooks";
import { auth } from "../../firebase/clientApp";
import { setUserInfo } from "../../features/modal/Auth/userInfoSlice";
import {  navigationInitialState, navigationReducer } from "../../hooks/naviagationHook";
type MenuProps = {
user:User|null
};
const menuList =[{id:0,icon:CgProfile, text:"Profile"},{id:1,icon:MdOutlineLogin, text:"Log Out"}]
const Menu: React.FC<MenuProps> = ({user}) => {
const [value, dispatch] = useReducer(navigationReducer,navigationInitialState)
  const handleItemClick =(idx:number)=>{
return async(e:React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
  e.preventDefault()
  switch(idx){
case 0:
  break;
case 1:
  dispatch({type:"logout"})
//  await logout()
break
 
  }
}
  }
  return (
    <NavMenu>
      <MenuButton cursor={"pointer"}
      padding="0px 6px"
      _hover={{border:"",outlineColor:"gray.200"}}
      >
        {user?<Flex align={"center"}><Icon as={FaRedditSquare} fontSize={24} color={"gray.300"} ml={1.5} mr={1.5}/>
        <ChevronDownIcon/>
        </Flex>:<Flex align={"center"}><Icon fontSize={24}  as={VscAccount} color={"gray.400"}  mr={1} /> <ChevronDownIcon/></Flex>}
      </MenuButton>
      <MenuList mt={0.5}>
        {menuList.map((item,idx)=>{

      return<>  <MenuItem key={idx} fontWeight={"700"} fontSize={"10pt"} >
        <Flex align={"center"} onClick={handleItemClick(item.id)}>
            <Icon fontSize={20} mr={2} as={item.icon} />
            {item.text}
        </Flex>
     
        </MenuItem>   {idx<menuList.length-1 &&<MenuDivider/>}</>
        })}
      </MenuList>
    </NavMenu>
  );
};
export default Menu


