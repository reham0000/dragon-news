import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const notify = () =>
    toast.success("🦄Login Successful!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="flex justify-between items-center">
        <div>{user && user.email}</div>
        <div className="nav space-x-5">
          <Link to="/">Home</Link>
          <Link to="/career">Career</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="login flex gap-2 items-center">
          <div className="">
            <img src={userIcon} alt="" />
          </div>
          {user && user.email ? (
            <button onClick={logOut} className="btn btn-neutral rounded-none">
              Logout{" "}
            </button>
          ) : (
            <Link
              onClick={notify}
              to="/auth/login"
              className="btn btn-neutral rounded-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Navbar;
