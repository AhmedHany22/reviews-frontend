import "./Home.css";
import Review from "../../Components/Review";

const Home = () => {
  return (
    <div className="w-5/6 mx-auto my-12">
      <h2 class="text-4xl font-extrabold text-gray-700 w-max">
        Ninja Reviews
        <hr class="mt-2 w-auto h-1 bg-gray-500 rounded border-0 " />
      </h2>

      <ol class="relative border-l border-gray-200 mx-4 my-8">
        <Review />
        <Review />
      </ol>
    </div>
  );
};

export default Home;
