import { FaSearch,FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className=" flex mx-14 p-5 items-center justify-between">
            <div className="text-2xl font-bold">Recipe Calories</div>
            <div className="flex items-center gap-5 font-semibold">
                <a href="">Home</a>
                <a href="">Recipe</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            <div className="flex gap-2 items-center">
                <div className="flex items-center gap-1 relative">
                    <FaSearch className=" left-3 absolute "/>
                    <input className=" p-2 pl-10 border rounded-full border-blue-600 " type="search" name="" id="" placeholder="Search"/>
                </div>
                <div className=" bg-blue-600 p-2 rounded-full">
                     <FaRegUserCircle className="text-2xl"/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;