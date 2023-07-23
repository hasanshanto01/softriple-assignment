import React, { useContext } from 'react';
import logo from '../../../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';


const Mainbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSearch = (event) => {

        if (event.key === 'Enter') {
            event.preventDefault();

            let searchText = event.target.value;
            // console.log(searchText);

            if (searchText.toLowerCase() === 'Men'.toLowerCase()) {
                navigate('/men');
            }
            else if (searchText.toLowerCase() === 'Women'.toLowerCase()) {
                navigate('/women');
            }
            else if (searchText.toLowerCase() === 'Baby'.toLowerCase()) {
                navigate('/baby');
            }
            else {
                navigate('/');
            }

        };

    };

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(err => {
                console.log(err.message);
            })

    };

    return (
        <div className="navbar gap-5 bg-base-100 shadow-lg px-10">
            <div className="navbar-start w-1/5">
                <Link to='/'>
                    <img src={logo} alt="" className='w-24 p-1 border border-primary rounded-full' />
                </Link>
            </div>
            <form className="navbar-center w-3/5">
                <input type="text" placeholder="Search by category"
                    className="w-3/4 mx-auto p-3 border-2 border-primary rounded-lg"
                    onKeyDown={handleSearch}
                />
            </form>
            <div className="navbar-end justify-between items-center w-1/5">
                <div>
                    <FontAwesomeIcon icon={faHeart} className='w-8 h-8 mr-5' />
                    <FontAwesomeIcon icon={faCartShopping} className='w-8 h-8' />
                </div>
                <div>
                    {
                        user?.uid ? <div className="tooltip tooltip-bottom" data-tip={user?.email}>
                            <button className='btn btn-sm btn-primary' onClick={handleLogOut}>Log Out</button>
                        </div> : <Link to='/login'>
                            <button className='btn btn-outline btn-primary'>Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Mainbar;