import CurrentSingleCook from "../CurrentSingleCook/CurrentSingleCook";
import PropTypes from 'prop-types'

const CurrentWatchCook = ({currentCook}) => {
    return (
        <>
            <p className=" text-3xl font-bold text-center border-b-2 pb-4 mt-5">Currently Cooking: {currentCook.length}
            </p>
            <table className=" overflow-x-auton w-full">
                <thead >
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                </thead>
                        {   
                        currentCook.map((currentSingleCook, idx) => <CurrentSingleCook idx={idx} key={idx} currentSingleCook={currentSingleCook}></CurrentSingleCook>)
                        }
                
            </table>
        </>
    );
};

CurrentWatchCook.propTypes ={
    currentCook: PropTypes.object
}

export default CurrentWatchCook;