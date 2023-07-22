import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-2/5 mx-auto my-24 border border-primary rounded-lg'>
            <h2 className='my-5 text-center text-3xl font-semibold text-primary'>Login</h2>
            <form className='w-3/4 mx-auto'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">User Name:</span>
                    </label>
                    <input type="email" placeholder="Enter name" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email:</span>
                    </label>
                    <input type="email" placeholder="Enter email" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Enter confirm password" className="input input-bordered w-full" />
                </div>
                <div className='mt-5 text-center'>
                    <p className='text-lg'>Alreay have account? <strong className='text-primary'><Link to='/login'>Login</Link></strong></p>
                </div>
                <button type="submit" className='btn btn-primary w-full my-8'>Register</button>
            </form>
            <div className="divider text-primary w-4/5 mx-auto">OR</div>
            <div className='w-3/4 mx-auto my-8'>
                <button className='btn btn-outline btn-primary w-full'>Login with Google</button>
            </div>
        </div>
    );
};

export default Register;