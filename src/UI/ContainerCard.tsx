import { Card } from "@chakra-ui/react";

export function ContainerCard({ children }: any) {
  return (
    <Card
      align="center"
      maxW="600px"
      bgColor={"#2d3748"}
      margin="auto"
      color={"#fff"}
      p="10px"
    >
      {children}
    </Card>
  );
}
