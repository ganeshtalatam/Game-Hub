import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SwitchButton from "./SwitchButton";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onSearch={onSearch} />
      <SwitchButton />
    </HStack>
  );
};

export default NavBar;
