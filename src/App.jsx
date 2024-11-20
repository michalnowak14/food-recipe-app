import { useState } from "react";
import Search from "./components/search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./app.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodDetail from "./components/FoodDetail";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("656329");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodID={setFoodID} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodData={foodData} foodID={foodID} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
