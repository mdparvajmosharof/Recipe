import PropTypes from 'prop-types'

const CurrentSingleCook = ({currentSingleCook, idx}) => {
    const {preparing_time, recipe_name, calories} = currentSingleCook;
    return (
        <>
            <tbody>
                <td className='px-2 py-2'>{idx + 1}</td>
                <td className='px-2 py-2'>{recipe_name} </td>
                <td className='px-2 py-2'>{preparing_time} minutes</td>
                <td className='px-2 py-2'>{calories}</td>
                
            </tbody> 
        </>
    );
};

CurrentSingleCook.propTypes ={
    currentSingleCook: PropTypes.object,
    idx: PropTypes.number
}

export default CurrentSingleCook;