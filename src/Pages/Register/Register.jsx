import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  // const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUser,
    setUser,
    loading,
    setLoading,
    userUpdateProfile,
    error,
    setError,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const lowerCase = /[a-z]/;
    if (!lowerCase.test(password)) {
      setError("Password must contain at least one lowercase letter");
      setLoading(false)
      return;
    }

    const upperCase = /[A-Z]/;
    if (!upperCase.test(password)) {
      setError("Password must contain at least one uppercase letter");
      setLoading(false)
      return;
    }

    if (password.length < 6) {
      setError("Password must at least 6 character");
      setLoading(false)
      return;
    }

    const profile = {
      displayName: name,
      photoURL: photo,
    };
    
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        userUpdateProfile(profile);
        navigate("/");
        toast.success("registered successfully");
        setLoading(false);
      })
      .catch((err) => {
        if (err) {
          toast.error("User already exsist");
          setLoading(false);
        }
      });
  };
  return (
    <div className="hero min-h-[85vh] -z-50">
      <div className="card dark:border-2 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-2xl font-bold text-center">Register now!</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark: text-white">Name</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text dark: text-white">Photo URL</span>
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
              <span className="label-text dark: text-white">Password</span>
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
            <button className="btn btn-primary">
              {loading ? (
                <span className="loading loading-spinner loading-md"></span>
              ) : (
                " Register"
              )}
            </button>
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
