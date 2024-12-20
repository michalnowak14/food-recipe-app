import { useEffect, useState } from "react";
import styles from "./fooddetail.module.css";
import ItemList from "./ItemList";

export default function FoodDetail({ foodID }) {
  const [food, setFood] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "d7c866828db242e68cd1985e84f86cdf";

  useEffect(() => {
    async function fetchFoodDetail() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch food details");
        const data = await res.json();
        setFood(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }
    fetchFoodDetail();
  }, [foodID]);

  if (!food) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt={food.title} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>🕰️ {food.readyInMinutes} minutes</strong>
          </span>
          <span>
            <strong> 🍽️Serves {food.servings}</strong>
          </span>
          <span>
            {" "}
            {food.vegetarian ? "🌿 Vegetarian" : "🍖 Non-Vegetarian"}
          </span>
          <span> {food.vegan ? "Vegan" : ""}</span>
        </div>
        <div className={styles.recipeInstructions}>
          <h2>Ingredients</h2>
          <ItemList food={food} />
          <h2 className={styles.instructions}>Instructions</h2>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ol>
              {food.analyzedInstructions?.[0]?.steps?.map((step, index) => (
                <li className={styles.instructionsStep} key={index}>
                  {step.step}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
