import { useEffect, useState } from "react";
import type { Recipe } from "./types";

export function useRecetasData() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [savedRecipes, addRecipe] = useState<Recipe[]>([]);
  const pushRecipe = (index:number)=>{
  let clonRecipes = [...recipes];
   clonRecipes.splice(index,1);
   setRecipes(clonRecipes);
  }
  const addNewRecipe = (index:number)=>{
    let clonRecipes = [...savedRecipes];
    clonRecipes.push(recipes[index]);
    addRecipe(clonRecipes);
  }
  useEffect(() => {
    fetch(
      "https://www.paulinacocina.net/wp-json/wp/v2/media?categories=38&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => {
        const recetas:Recipe[] = data.map((r: any) => {
          return {
            id: r.id,
            title: r.title.rendered,
            image: r.guid.rendered,
            link: r.link,
          };
        });
        setRecipes(recetas);
      });
  }, []);
  return { recipes ,pushRecipe ,savedRecipes, addNewRecipe};
}