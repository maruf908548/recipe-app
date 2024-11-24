import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import OurRecipe from "./components/Recipe/OurRecipe";
import RecipeCards from "./components/Recipe/RecipeCards";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <RecipeCards></RecipeCards>
    </>
  );
}

export default App;
