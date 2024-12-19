const Fashion = ({ fashion }) => {
  const { name, price, img } = fashion;
  return (
    <div className="border rounded-lg">
        <div>
            <img src={img} alt="" />
        </div>
        <div className="p-2 flex flex-col">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="flex-grow">Price: ${price}</p>
            <div>
                <button className="w-full p-2 bg-blue-600 text-white font-semibold">Show Details</button>
            </div>
        </div>
    </div>
  );
};

export default Fashion;
