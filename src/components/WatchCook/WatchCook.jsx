import PropTypes from 'prop-types'
import WatchCookSingle from '../WatchCookSingle/WatchCookSingle';
const WatchCook = ({watchCook, handleCurrentCook}) => {
    return (
        <div>
            <p className=" text-3xl font-bold text-center border-b-2 pb-4">Want to cook: {watchCook.length}
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
                        watchCook.map((watchCookSingle, idx) => <WatchCookSingle handleCurrentCook={handleCurrentCook} idx={idx} key={idx} watchCookSingle={watchCookSingle}></WatchCookSingle>)
                        }
                
            </table>
        </div>
    );
};

WatchCook.propTypes ={
    watchCook: PropTypes.object.isRequired,
    handleCurrentCook: PropTypes.object
}
export default WatchCook;