import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // const user = { email, password };
    // console.log(user);

    loginUser(email, password)
    .then(result=> console.log(result.user))
    .catch(error=> {
      console.log('ERROR', error)
    })
  };
  return (
    <div className="hero min-h-screen -z-50">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-2xl font-bold text-center">Login now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="flex item-center justify-center p-2 gap-2 border rounded-lg cursor-pointer">
            <i>
              <FcGoogle size={25} />
            </i>
            <span className="font-semibold">Login with Google</span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
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
