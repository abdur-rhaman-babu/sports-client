import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center h-screen justify-center">
            <div className="text-center">
            <h1 className="text-3xl font-bold">Page Not found 404</h1>
            <button onClick={()=> navigate('/')} className="bg-black px-4 text-white font-bold py-2">Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;