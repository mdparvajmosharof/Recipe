import PropTypes from 'prop-types';
import { MdOutlineAccessTime} from "react-icons/md";
import { FaFire } from "react-icons/fa";

const Recipe = ({recipe, handleWatchCook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = recipe;
    return (
        <div className='p-4 border border-blue-600 rounded-2xl'>
            <img className='w-[300px] h-[200px] m-0 mx-auto pb-4 rounded-2xl' src={recipe_image} alt="" />
            <h1 className='text-2xl font-bold '>{recipe_name}</h1>
            <p className='py-4 text-gray-700 '>{short_description}</p>
            <div className='border-y-2 py-4 '>
                <p className='font-bold '>Ingrediants : {ingredients.length}</p>
                <ul className=' list-decimal pl-8 py-2 text-gray-700'>
                    <li>{ingredients[0]}</li>
                    <li>{ingredients[1]}</li>
                    <li>{ingredients[2]}</li>
                    <li>{ingredients[3]}</li>
                </ul>
            </div>
            <div className='flex gap-4 items-center my-5'>
                <div className='flex items-center gap-1 '>
                    <MdOutlineAccessTime />
                    <span> {preparing_time} minutes</span>
                </div>
                <div className='flex items-center gap-1'>
                    <FaFire />
                    <span>{calories}</span>
                </div>
            </div>
            <button onClick={() => handleWatchCook(recipe)} className=' bg-blue-400 rounded-full p-2 px-5 font-bold hover:bg-green-400'>Want to Cook</button>
        </div>
    );
};

Recipe.propTypes = {
    recipe:  PropTypes.object.isRequired,
    handleWatchCook: PropTypes.func
}
export default Recipe;