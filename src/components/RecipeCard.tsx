import {
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecetasData } from "../hook";
import { DislikeButton, LikeButton } from "../UI/Button";
import { ContainerCard } from "../UI/ContainerCard";
import { ListRecipe } from "../UI/List";

export function RecipeCard() {
  const { recipes, pushRecipe, addNewRecipe, savedRecipes } = useRecetasData();
  const [lenghRandom, setLenghtRandom] = useState(80);
  const [index, setIndex] = useState<number>(
    Math.floor(Math.random() * lenghRandom) + 1
  );
  const deleteAndChangeIndex = (index: number) => {
    pushRecipe(index);
    setLenghtRandom(lenghRandom - 1);
    const newIndex = Math.floor(Math.random() * lenghRandom) + 1;
    setIndex(newIndex);
  };
  const saveRecipe = (index: number) => {
    addNewRecipe(index);
    deleteAndChangeIndex(index);
  };

  return (
    <ContainerCard>
      <CardHeader>
        <Heading size="lg"> {recipes[index]?.title}</Heading>
      </CardHeader>
      <CardBody>
        <Image src={recipes[index]?.image} alt="Lasaña" borderRadius="lg" />
      </CardBody>
      <CardFooter>
        <LikeButton handle={() => saveRecipe(index)} />
        <DislikeButton handle={() => deleteAndChangeIndex(index)} />
      </CardFooter>
      <div style={{ alignSelf: "center" }}>
        <ListRecipe items={savedRecipes} />
      </div>
    </ContainerCard>
  );
}
