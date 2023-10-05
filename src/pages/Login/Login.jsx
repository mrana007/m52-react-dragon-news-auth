import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget); //
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        // signIn User
        signIn(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .cath(error =>{
            console.error(error);
        })
        
        // const email = e.target.email.value;
        // const password = e.target.password.value;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="bg-white p-20">
                <h2 className="text-3xl my-10 text-center">Login your account</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary normal-case">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not Have An Account ? <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;