'use client';
import styles from "./page.module.css";
import { useRouter} from "next/navigation";
import { useEffect, useState } from "react";
const Profile = () => {
    const handleLogout = () =>{
        localStorage.removeItem("token");
        router.push('/signup/login');
    }

  const router = useRouter();

 const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/users/3");
    const result = await response.json();
    setProducts(result);
    return result;
  };
  useEffect(() => {
    fetchProducts();
  }, []);

    return (
      <div className={styles.cont}>
             <button className={styles.btn1} onClick={handleLogout}>log out</button>
             <div className={styles.parent}>
      <h1 className={styles.about}>Profile</h1>
      <div className={styles.info}>
        <div className={styles.info1}>
          <p>Firstname</p>
          <p>Lastname</p>
          <p>Username</p>
          <p>Password</p>
          <p>Email</p>
          <p>Phone</p>
          <p>City</p>
          <p>street</p>
          <p>number</p>
          <p>zipcode</p>
          <p>Geolocation</p>
        </div>
        <div className={styles.info2}>
          <p>{products.name?.firstname}</p>
          <p>{products.name?.lastname}</p>
          <p>{products.username}</p>
          <p>{products.password}</p>
          <p>{products.email}</p>
          <p>{products.phone}</p>
          <p>{products.ddress?.city}</p>
          <p>{products.address?.street}</p>
          <p>{products.address?.number}</p>
          <p>{products.address?.zipcode}</p>
          <p>{products.address?.geolocation?.lat} {products.address?.geolocation?.long}</p>
        </div>
      </div>
    </div>
  </div>
    );
};
export default Profile;