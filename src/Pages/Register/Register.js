import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState('');

    const handleRegister = (data) => {
        setRegisterError('');

        // console.log(data);
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const confirmPassword = data.confirmPassword;

        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    // const user = result.user;
                    // console.log('register:',user);

                    const userInfo = {
                        displayName: name
                    };

                    updateUser(userInfo)
                        .then(() => {
                            // console.log('register:', user);

                            toast.success('User created successfully.');
                            navigate('/');
                        })
                        .catch(err => {
                            console.log(err);
                        })

                })
                .catch(err => {
                    console.log(err);
                    setRegisterError(err.message);
                })
        };

    };

    const handleGoogleLogin = () => {
        setRegisterError('');

        googleLogIn()
            .then(result => {
                // const user = result.user;
                // console.log('googleLogin:', user);

                navigate('/');
            })
            .catch(err => {
                console.log(err.message);
                setRegisterError(err.message);
            })

    };

    return (
        <div className='w-4/5 md:w-3/5 lg:w-2/5 mx-auto my-24 border border-primary rounded-lg'>
            <h2 className='my-5 text-center text-3xl font-semibold text-primary'>Register</h2>
            <form className='w-3/4 mx-auto' onSubmit={handleSubmit(handleRegister)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Name:</span>
                    </label>
                    <input type="text"
                        placeholder="Enter name"
                        className="input input-bordered w-full"
                        {...register("name", { required: 'Name is required' })}
                    />
                    {errors?.name && <p className='text-red-600'>{errors?.name.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Email:</span>
                    </label>
                    <input type="email"
                        placeholder="Enter email"
                        className="input input-bordered w-full"
                        {...register("email", { required: 'Email is required.' })}
                    />
                    {errors?.email && <p className='text-red-600'>{errors?.email.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Password</span>
                    </label>
                    <input type="password"
                        placeholder="Enter password"
                        className="input input-bordered w-full"
                        {...register("password", { required: 'Password is required and must have uppercase, lowercase, number and special characters.', pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ })}
                    />
                    {errors?.password && <p className='text-red-600'>{errors?.password.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Confirm Password</span>
                    </label>
                    <input type="password"
                        placeholder="Enter confirm password"
                        className="input input-bordered w-full"
                        {...register("confirmPassword", { required: 'Confirm password is required and must have uppercase, lowercase, number and special characters.', pattern: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/ })}
                    />
                    {errors?.confirmPassword && <p className='text-red-600'>{errors?.confirmPassword.message}</p>}
                </div>
                <div className='text-red-600 my-2'>
                    <p>{registerError}</p>
                </div>
                <div className='mt-5 text-center'>
                    <p className='text-lg'>Already have account? <strong className='text-primary'><Link to='/login'>Login</Link></strong></p>
                </div>
                <button type="submit" className='btn btn-primary w-full my-8'>Register</button>
            </form>
            <div className="divider text-primary w-4/5 mx-auto">OR</div>
            <div className='w-3/4 mx-auto my-8'>
                <button className='btn btn-outline btn-primary w-full' onClick={handleGoogleLogin}>Login with Google</button>
            </div>
        </div>
    );
};

export default Register;