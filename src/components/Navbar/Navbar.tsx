import { Flex, Image, Spinner } from "@chakra-ui/react";
import { onAuthStateChanged } from "@firebase/auth";
import React, {
  PropsWithChildren,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { setUserInfo } from "../../features/modal/Auth/userInfoSlice";
import { auth } from "../../firebase/clientApp";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import RightContent from "../RightContent";
import SearchInput from "../SearchInput";
// import  RedditLogo from "../../../public/images/redditFace.svg"
const RightContent = React.lazy(() => import("../RightContent"));
type NavbarProps = PropsWithChildren;

const Navbar: React.FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.userInfo.user);
//   useEffect(() => {
//     try {
//       onAuthStateChanged(auth, (user) => {
//         console.log("user", user);
//         dispatch(setUserInfo(user));
//         setLoading(false);
//       });
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//     }
//   }, []);

  return loading == true ? (
    <Spinner />
  ) : (
    <Suspense fallback={<Spinner />}>
      <Flex bg={"white"} height="44px" padding={"6px 12px"}>
        <Flex align={"center"}>
          <Image
            src={"/images/redditFace.svg"}
            alt={"reddit Logo"}
            height="30px"
            mr={{
              base: "2",
              md: "0",
            }}
          />

          <Image
            src="/images/redditText.svg"
            height={"46px"}
            display={{
              base: "none",
              md: "unset",
            }}
          />
        </Flex>
        <SearchInput user={user} />
        <RightContent user={user} />
        {/* <Directory /> */}
      </Flex>
    </Suspense>
  );
};
export default Navbar;
