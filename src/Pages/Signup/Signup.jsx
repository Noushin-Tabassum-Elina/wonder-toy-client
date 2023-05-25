import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';
import '../Login/Login.css'
import Swal from 'sweetalert2';
import { useTitle } from '../../hooks/useTitle';

const Signup = () => {
    const { user, createUser } = useContext(AuthContext)
    // console.log(user, createUser)

    const [error, setError] = useState('');

    const handleRegister = event => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoURL.value;
        const password = form.password.value;

        console.log(name, email, password, photo)

        if (password.length < 6) {
            setError('Password should contain 6 character');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                setError('')
                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photo
                  }).then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!!',
                        text: 'User SuccessFully created.',
                      });
    
                      form.reset();
                      
                  }).catch((err) => {
                    setError(err.message);
                    return;
                });
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useTitle('Sign Up')

    return (
        <div className="hero min-h-screen mt-12 bg-base-200 mb-4 login">
        <div className="hero-content">

            <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className='text-4xl font-extrabold'>SignUp Here</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover text-slate-600">Already have an account? Login</Link>
                        </label>
                    </div>
                    <p className='text-red-600 text-center'>{error && error}</p>
                    <div className="form-control mt-6">
                        
                        <button className="btn btn-primary bg-slate-600 hover:bg-slate-800">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
       
    );
};

export default Signup;