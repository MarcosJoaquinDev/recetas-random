import { Button } from "@chakra-ui/react";
import { DislikeIcon, LikeIcon } from "./LinkIcon";

export function LikeButton({ handle }: any) {
  return (
    <Button
      size="md"
      height="48px"
      width="200px"
      border="2px"
      mr="20px"
      borderColor="green.500"
      bgColor="#1a202c"
      _hover={{
        background: "#131f4647",
        color: "#01ff78",
      }}
      onClick={handle}
    >
      <LikeIcon />
    </Button>
  );
}
export function DislikeButton({ handle }: any) {
  return (
    <Button
      _hover={{
        background: "#8527278b",
        color: "#ff0701",
      }}
      bgColor="#1a202c"
      size="md"
      height="48px"
      width="200px"
      border="2px"
      borderColor="red.500"
      onClick={handle}
    >
      <DislikeIcon />
    </Button>
  );
}
