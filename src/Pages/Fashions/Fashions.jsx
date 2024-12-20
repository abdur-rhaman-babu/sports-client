import { useEffect, useState } from "react";
import useAxiosSecure from "../../Context/useAxiosSecure";
import Fashion from "../../components/Fashion/Fashion";
import { useLoaderData } from "react-router-dom";

const Fashions = () => {
  const [fashions, setFashions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPages] = useState(10);
  const axiosSecure = useAxiosSecure();
  const { count } = useLoaderData();
  const numberOfPages = Math.ceil(count / itemsPerPage);
  //   console.log(numberOfPages);

  //   const pages = [];
  //   for (let i = 0; i < numberOfPages; i++) {
  //     pages.push(i);
  //   }

  const pages = [...Array(numberOfPages).keys()];
  //   console.log(pages);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPages(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axiosSecure
      .get(`/fashions?page=${currentPage + 1}&size=${itemsPerPage}`)
      .then((res) => setFashions(res.data));
  }, [currentPage, itemsPerPage]);
  return (
    <div>
      <h1>Fashions:{fashions.length}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {fashions.map((fashion) => (
          <Fashion key={fashion._id} fashion={fashion} />
        ))}
      </div>
      <p>Current Page: {currentPage + 1}</p>
      <div className=" my-10 flex gap-5 justify-center">
        <button
          onClick={handlePrevPage}
          className={`border px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white`}
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            className={`border px-3 py-1 rounded-lg
                 ${currentPage === page ? "bg-blue-600 text-white" : ""}
                hover:bg-blue-600 hover:text-white`}
            onClick={() => setCurrentPage(page)}
            key={page}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className={`border px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white`}
        >
          Next
        </button>
        <div className="border">
          <select
            className="outline-none"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Fashions;
