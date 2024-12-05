import { useLoaderData } from "react-router-dom";

const MyEquipList = () => {
    const products = useLoaderData() || []
    return (
        <div>
            <h1>My Equipment list : {products.length}</h1>
        </div>
    );
};

export default MyEquipList;