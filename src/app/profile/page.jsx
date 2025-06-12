'use client';
import {redirect} from "next/navigation";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "@/lib/slices/userSlice";
const Profile = () => {
    const user = useSelector(state => state.user);
    console.log(user);
    const dispatch = useDispatch();
    const handleEmailUpdate=() =>{
       
dispatch(changeEmail('test@gmail'));
console.log('hallo');
    }
    const handleLogout = () =>{
        localStorage.removeItem("token");
        redirect('/signup/login');
    }
    return (
        <div className={styles.parent}>
            <p>name: {user.username}</p>
            <p>email:{user.email}</p>
            <button onClick={handleEmailUpdate} >update email</button>
            <h1>hallo profile</h1>
            <button onClick={handleLogout}>log out</button>
        </div>
    );
};
export default Profile;