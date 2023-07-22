import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-2/5 mx-auto my-24 border border-primary rounded-lg'>
            <h2 className='my-5 text-center text-3xl font-semibold text-primary'>Login</h2>
            <form className='w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email:</span>
                    </label>
                    <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
                </div>
                <Link to='/forget' className='text-lg hover:underline hover:text-blue-600'>
                    Forget password?
                </Link>
                <div className='mt-5 text-center'>
                    <p className='text-lg'>New to this website? <strong className='text-primary'><Link to='/register'>Register</Link></strong> now</p>
                </div>
                <button type="submit" className='btn btn-primary w-full my-8'>Login</button>
            </form>
            <div className="divider text-primary w-4/5 mx-auto">OR</div>
            <div className='w-3/4 mx-auto my-8'>
                <button className='btn btn-outline btn-primary w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;