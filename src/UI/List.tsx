import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Recipe } from "../types";
import { LinkIcon } from "./LinkIcon";
type ListProps = {
  items: Recipe[];
  showMenu?: boolean;
  children?: any;
};
export function ListRecipe({ items }: ListProps) {
  const [recipes, showRecipes] = useState<Boolean>(false);
  const handle = () => {
    showRecipes(!recipes);
  };
  return (
    <>
      <Container>
        <Button
          onClick={handle}
          _hover={{
            color: "#1a202c",
            background: "#fff",
          }}
          bgColor="#1a202c"
          fontSize="md"
          height="48px"
          width="200px"
          border="2px"
          disabled={false}
        >
          Ver recetas
        </Button>
        {recipes && (
          <Box
            style={{
              width: "400px",
              transition: "all 500ms",
              height: "100vh",
              backgroundColor: "#020229",
              position: "fixed",
              zIndex: "100",
              left: "0px",
              top: "0px",
              padding: "20px",
              color: "#355fbb",
            }}
          >
            <Button bg="#1e1c97" color="black" onClick={handle}>
              X
            </Button>
            <br />
            <br />
            {items.map((i) => (
              <Link
                key={i.id}
                href={i.link}
                display="flex"
                gap="20px"
                target="_blank"
                color="#fff"
              >
                <LinkIcon />
                <Text fontSize="lg">{i.title}</Text>
              </Link>
            ))}
          </Box>
        )}
      </Container>
    </>
  );
}
