import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser, loginWithGoogle, loading, setLoading, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        setLoading(false);
        navigate("/");
        toast.success("Logged In successfull");
      })
      .catch((err) => {
        if (err) {
          toast.error("Invalid email or password");
          setLoading(false);
        }
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
        toast.success("Logged In successfull");
      })
      .catch((error) => {
        // console.log("Error", error);
      });
  };

  return (
    <div className="hero min-h-screen -z-50">
      <div className="card dark:border-2 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold text-center">Login now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark: text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text dark: text-white">Password</span>
            </label>
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-12 mt-1 right-3"
            >
              {showPassword ? <IoEye /> : <IoEyeOff />}
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover dark: text-white"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div
            onClick={handleGoogleLogin}
            className="flex item-center justify-center p-2 gap-2 border rounded-lg cursor-pointer"
          >
            <i>
              <FcGoogle size={25} />
            </i>
            <span className="font-semibold">Login with Google</span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
          <p>
            Create Account?{" "}
            <Link to="/register">
              <span className="text-red-600">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
