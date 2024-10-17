import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import WatchCook from "./components/WatchCook/WatchCook";
import CurrentWatchCook from "./components/CurrentWatchCook/CurrentWatchCook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [watchCook, setWatchCook] = useState([]);

  const [currentCook, setCurrentCook] = useState([]);

  const handleWatchCook = (recipe) => {
    const newWatchCook = [...watchCook, recipe];
    const isExist = watchCook.find(item => item.recipe_id == recipe.recipe_id);
    if(!isExist){
      
      setWatchCook(newWatchCook);
    }
    else{
      toast("This recipe is exist");
    }
  };

  const handleCurrentCook = (watchCookSingle, recipe_id) => {
    console.log(recipe_id);
    console.log(watchCookSingle.recipe_id);
    const newWatchCookSingle = [...currentCook, watchCookSingle];
    setCurrentCook(newWatchCookSingle);
    const remainingWatchCook = watchCook.filter(watchCookSingle=> watchCookSingle.recipe_id !== recipe_id );
    setWatchCook(remainingWatchCook);
  };

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="mx-20 flex">
        <Recipes handleWatchCook={handleWatchCook}></Recipes>
        <div className="w-1/3 ml-4">
          <WatchCook
            handleCurrentCook={handleCurrentCook}
            watchCook={watchCook}
          ></WatchCook>
          <CurrentWatchCook 
            currentCook={currentCook}
          ></CurrentWatchCook>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
