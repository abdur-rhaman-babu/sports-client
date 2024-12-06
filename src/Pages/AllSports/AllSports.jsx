import React from "react";
import { Fade } from "react-awesome-reveal";
import { GrView } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";

const AllSports = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="text-center my-5">
      <h2 className="font-bold text-3xl mb-5">ALL Equipment List</h2>
      <p>All Equipment List showcases all your personal gear, tailored for easy management. <br /> Track, view, and update equipment details in one convenient place.</p>
      </div>
      <Fade cascade damping={0.1}>
      <div className="overflow-x-auto mb-5 dark:border rounded-lg">
        <table className="table">
          <thead className="dark:text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, idx) => (
              <tr key={product._id}>
                <th>{idx + 1}</th>
                <td>{product.item_name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>
                  <Link to={`/viewDetails/${product._id}`}>
                    <button className="border-2 p-2 rounded-lg">
                      <GrView />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </Fade>
    </div>
  );
};

export default AllSports;
