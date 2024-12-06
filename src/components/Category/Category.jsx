import { Fade } from "react-awesome-reveal";

const Category = () => {
  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl my-5">Category</h1>
      <p className="text-center my-5">
        Welcome to our website. Here you can get any sports accssories easily.
        Have you nice visit. <br /> You can buy any product for online.{" "}
      </p>
      <Fade cascade damping={0.1}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="border p-2 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center bg-blue-600 text-white mb-5">
            Cricket
          </h1>
          <img className="h-[230px] w-full" src="https://i.ibb.co.com/HKGSTj0/cricket-category.jpg" alt="" />
        </div>
        <div className="border p-2 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center bg-blue-600 text-white mb-5">
            Football
          </h1>
          <img className="h-[230px] w-full" src="https://i.ibb.co.com/yn9WVYG/Football-category.jpg" alt="" />
        </div>
        <div className="border p-2 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center bg-blue-600 text-white mb-5">
            Tannis
          </h1>
          <img className="h-[230px] w-full"
            src="https://i.ibb.co.com/rdKRMSq/tannis-category.jpg"
            alt=""
          />
        </div>
        <div className="border p-2 rounded-lg shadow-lg h-[300px]">
          <h1 className="text-2xl font-bold text-center bg-blue-600 text-white mb-5">
            Bascket Ball
          </h1>
          <img className="h-[230px] w-full object-cover"
            src="https://i.ibb.co.com/cCVQXV8/bascketball-category.jpg"
            alt=""
          />
        </div>
      </div>
      </Fade>
    </div>
  );
};

export default Category;
