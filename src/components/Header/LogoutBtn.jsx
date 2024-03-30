import React from 'react';
import { logout } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () =>{
        // account.logout is for logging out from appwrite and dispatch(logout()) is to update  current state in store
        authService.logout().then(()=>{
            dispatch(logout())
        });
    }
    return(
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 round-full' onClick={logoutHandler}>Logout</button>
    )
}

export default LogoutBtn