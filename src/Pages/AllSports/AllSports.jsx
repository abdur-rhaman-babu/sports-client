import React from "react";
import { GrView } from "react-icons/gr";
import { Link, useLoaderData } from "react-router-dom";

const AllSports = () => {
  const products = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
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
    </div>
  );
};

export default AllSports;
