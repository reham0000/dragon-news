import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

  const {createNewUser, setUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log({name, email, photo, password});

    createNewUser (email, password)
    .then((result) => {
      const user = result.user;
      setUser(user)
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    })
    
  }

    return (
        <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="text-2xl font-semibold text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
            name='name'
              type="text"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
        <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
            name='photo'
              type="text"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
            name='email'
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
            name='password'
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover font-semibold">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
        Don’t Have An Account ? <Link className="text-red-600" to='/auth/register'>Register</Link>
        </p>
      </div>
    </div>
    );
};

export default Register;