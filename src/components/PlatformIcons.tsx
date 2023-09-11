import {
  FaWindows,
  FaPlaystation,
  FaLinux,
  FaApple,
  FaXbox,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

interface Props {
  platform: Platform[];
}

const PlatformIcons = ({ platform }: Props) => {
  const iconsassign: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platform.map((platform) => (
        <Icon
          key={platform.id}
          as={iconsassign[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
