import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem setFoodID={setFoodID} key={food.id} food={food} />
      ))}
    </div>
  );
}
