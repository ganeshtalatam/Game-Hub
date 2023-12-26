import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchButton from "./SwitchButton";
import SearchInput from "./SearchInput";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <HStack>
      <Image
        src={logo}
        boxSize={"60px"}
        cursor="pointer"
        onClick={() => navigate("/")}
      ></Image>
      <SearchInput />
      <SwitchButton />
    </HStack>
  );
};

export default NavBar;
