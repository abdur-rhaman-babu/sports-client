import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, user, setUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // const user = { name, photo, email, password };

    const lowerCase = /[a-z]/;
    if (!lowerCase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }

    const upperCase = /[A-Z]/;
    if (!upperCase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }

    if (password.length < 6) {
      setError("Password must at least 6 character");
      return;
    }
    // console.log(user);
    createUser(email, password)
    .then((result) => {
      console.log(result.user)
      setUser(result.user);
    })
    .catch(error=>{
      console.log('ERROR', error)
    })
  };
  return (
    <div className="hero min-h-[85vh] -z-50">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl font-bold text-center">Register now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-12 mt-1"
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </i>
          </div>
          <p className="text-red-600">{error}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
          <p>
            Create Account?{" "}
            <Link to="/login">
              <span className="text-red-600">Login now</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
