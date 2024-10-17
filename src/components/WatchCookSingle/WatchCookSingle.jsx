import PropTypes from 'prop-types';

const WatchCookSingle = ({watchCookSingle, idx, handleCurrentCook}) => {
    const {preparing_time, recipe_name, calories, recipe_id} = watchCookSingle;
   
    return (
        <>
            
            <tbody className=' text-sm'> 
                <td className='px-2 py-2'>{idx + 1}</td>
                <td className='px-2 py-2'>{recipe_name}</td>
                <td className='px-2 py-2'>{preparing_time} minutes</td>
                <td className='px-2 py-2'>{calories}</td>
                <td className='px-2 py-2'><button onClick={() =>handleCurrentCook(watchCookSingle, recipe_id)} className=' bg-blue-400 px-3 py-1 rounded-full hover:bg-green-300 font-bold'>Preparing</button>
                </td>
            </tbody> 
            
            
        </>
    );
};

WatchCookSingle.propTypes = {
    watchCookSingle: PropTypes.object,
    idx: PropTypes.number,
    handleCurrentCook: PropTypes.object
}

export default WatchCookSingle;