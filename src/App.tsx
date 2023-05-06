import { Text, Container } from "@chakra-ui/react";
import { RecipeCard } from "./components/RecipeCard";

export default function App() {
  return (
    <Container maxW="100%" p="20px" mt="80px">
      <Text fontSize="6xl" textAlign="center" mb="50px">
        Recetas
      </Text>
      <RecipeCard />
    </Container>
  );
}
