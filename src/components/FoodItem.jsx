import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodID }) {
  const handleClick = () => {
    setFoodID(food.id);
  };
  return (
    <div className={styles.itemContainer}>
      <img className={styles.image} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button on onClick={handleClick} className={styles.itemButton}>
          View recipe
        </button>
      </div>
    </div>
  );
}
