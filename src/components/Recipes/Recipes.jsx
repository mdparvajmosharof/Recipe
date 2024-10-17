import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from 'prop-types'

const Recipes = ({handleWatchCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch('recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])


  return (
    <div className=" w-2/3">
      

       <div className="grid grid-cols-2 gap-4">
            {
                recipes.map(recipe=> <Recipe 
                handleWatchCook={handleWatchCook}
                key={recipe.recipe_id}
                recipe={recipe}>

                </Recipe>)
            }
       </div>

    </div>
  );
};

Recipes.propTypes = {
  handleWatchCook: PropTypes.func
}

export default Recipes;
