import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { logIn, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('');

    const handleLogin = (data) => {
        setLoginError('');

        // console.log(data);
        const email = data.email;
        const password = data.password;

        logIn(email, password)
            .then((result) => {
                // const user = result.user;
                // console.log('login:', user);

                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            })

    };

    const handleGoogleLogin = () => {
        setLoginError('');

        googleLogIn()
            .then(result => {
                // const user = result.user;
                // console.log('googleLogin:', user);

                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                setLoginError(err.message);
            })

    };

    return (
        <div className='w-4/5 md:w-3/5 lg:w-2/5 mx-auto my-24 border border-primary rounded-lg'>
            <h2 className='my-5 text-center text-3xl font-semibold text-primary'>Login</h2>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email:</span>
                    </label>
                    <input type="email"
                        placeholder="Enter email"
                        className="input input-bordered w-full"
                        {...register("email", { required: true })}
                    />
                    {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password" placeholder="Enter password" className="input input-bordered w-full"
                        {...register("password", { required: true })}
                    />
                    {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                </div>
                <Link to='/forget' className='text-lg hover:underline hover:text-blue-600'>
                    Forget password?
                </Link>
                <div className='text-red-600 my-2'>
                    <p>{loginError}</p>
                </div>
                <div className='mt-5 text-center'>
                    <p className='text-lg'>New to this website? <strong className='text-primary'><Link to='/register'>Register</Link></strong> now</p>
                </div>
                <button type="submit" className='btn btn-primary w-full my-8'>Login</button>
            </form>
            <div className="divider text-primary w-4/5 mx-auto">OR</div>
            <div className='w-3/4 mx-auto my-8'>
                <button className='btn btn-outline btn-primary w-full' onClick={handleGoogleLogin}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;