import Navbar from "../../Shared/Navbar/Navbar";
import bgForm from '../../../assets/bgForm.jpg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/ProviderContext";
const Register = () => {
    const {CreateUser,notify}=useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password');
        console.log(name,"\n",email,"\n",password)
        //create user
        CreateUser(email,password)
        .then(res=>{

          console.log(res.user)})
        .catch(error=>console.log(error.message))
    }
    return (
      <div>
        <Navbar></Navbar>
        <div
          className="bg-slate-100 border-blue-600 rounded-lg shadow-lg p-4 w-1/2 mx-auto font-popins"
          style={{
            backgroundImage: `url(${bgForm})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "80%",
          }}
        >
          <h2 className="text-3xl text-center mb-10 text-white">
            Please Register
          </h2>
          <form
            onSubmit={handleRegister}
            className="md:w-3/4 lg:w-1/2 mx-auto "
          >
            <div className="form-control">
              <label className="lebel">
                <span className="lebel-text text-white">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="lebel">
                <span className="lebel-text text-white">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="lebel">
                <span className="lebel-text text-white">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <button onClick={notify} className="btn btn-secondary">
                Register
              </button>
            </div>
          </form>
          <p className="text-white text-center">
            Already have an Account ? Please{" "}
            <Link className="link text-white text-center" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Register;