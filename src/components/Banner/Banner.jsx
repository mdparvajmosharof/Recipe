import './banner.css'
const Banner = () => {
  return (
    <div>
      <div className=" mx-14 banner min-h-[540px] banner-bg  bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center gap-6 rounded-xl ">
        <h1 className="text-5xl font-extrabold text-white w-[80%] text-center">
        Discover an exceptional cooking 
class tailored for you!
        </h1>
        <p className="text-white">
        From quick and easy meals to gourmet delights, explore a world of flavors and inspiration.
        </p>
        <div className='flex gap-7'>
          <button className=" font-bold btn bg-blue-400 text-black border-0 p-3 px-5 rounded-full hover:bg-transparent hover:border-2 hover:border-blue-600 hover:text-white">Explore Now</button>
          <button className=" font-bold btn  text-white  border-2 border-blue-600 p-3 px-5 rounded-full hover:bg-blue-400 hover:border-0 hover:text-black">Our Feedback</button>

        </div>
          
      </div>
      
      <div className=" my-14 text-center w-full flex flex-col items-center gap-3">
        <h1 className=" text-3xl font-bold text-center">Our Recipes</h1>
        <p className="w-[70%]">
          From hearty comfort foods to light and refreshing options, find
          recipes tailored to your lifestyle. Let us guide you on a journey
          where every bite counts towards a healthier, happier you. Welcome to a
          place where taste and health unite, one calorie at a time.
        </p>
      </div>

    </div>
  );
};

export default Banner;
