import { useEffect, useState } from "react";
import useAxiosSecure from "../../Context/useAxiosSecure";
import Fashion from "../../components/Fashion/Fashion";
import { useLoaderData } from "react-router-dom";

const Fashions = () => {
  const [fashions, setFashions] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { count } = useLoaderData();
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);
  console.log(numberOfPages);

  //   const pages = [];
  //   for (let i = 0; i < numberOfPages; i++) {
  //     pages.push(i);
  //   }

  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  useEffect(() => {
    axiosSecure.get("/fashions").then((res) => setFashions(res.data));
  }, []);
  return (
    <div>
      <h1>Fashions:{fashions.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {fashions.map((fashion) => (
          <Fashion key={fashion._id} fashion={fashion} />
        ))}
      </div>
      <div className="text-center my-10 flex gap-5 justify-center">
        {pages.map((page) => (
          <button className="border px-3 py-1 rounded-lg hover:bg-black hover:text-white" key={page}>{page}</button>
        ))}
      </div>
    </div>
  );
};

export default Fashions;
