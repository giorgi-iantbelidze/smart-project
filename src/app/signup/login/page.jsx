 "use client";
import style from "./page.module.css";
import Image from "next/image";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import {redirect} from "next/navigation";
// import Form from "next/form";
// import { handleLogin } from "../action";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [checkbox, setCheckbox] = useState(false);
  const click = () => {
  setCheckbox(!checkbox);
  console.log({checkbox});
 };
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    
    const response = await fetch('https://fakestoreapi.com/auth/login', {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if(result?.token){
      if(checkbox){

      
      localStorage.setItem('token', JSON.stringify(result.token) )
      }
      redirect("/product");
    }
  };
  
  return (
    <div className={style.parent}>
      <Image
        className={style.image}
        src="https://cdn.prod.website-files.com/61f7dbe39e0f93ab69656d1f/642c0af0e36243b8ceca16bc_AdobeStock_566269642-p-1080.jpg"
        alt="poto"
        width={1920}
        height={765}
      />
      <div className={style.child1}>
        <form action="" className={style.container} onSubmit={handleLogin}>
          <h2 className={style.h2}>Login</h2>
          <div className={style.inputbox}>
            <span className={style.icon}>
              <MdOutlineDriveFileRenameOutline />
            </span>
            <input
              type="text"
              placeholder="username"
              className={style.input}
              name="username"
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </div>
          <div className={style.inputbox}>
            <span className={style.icon}>
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="password"
              className={style.input}
              name="password"
              onChange={(event) =>      setPassword(event.target.value)}
            ></input>
          </div>
            <div className="remmemberme">

          
          <input className={style.checkbox} type="checkbox" id="checkbox" value={checkbox}  onChange={click} />
          <label for="checkbox">Remmember me</label>
          </div>
          <div className={style.register}> 
            <button type="Submit" className={style.btn1}>
              Sign in
            </button>
            <Link href={"/signup/register"}>
              <button className={style.btn2}>Not Register? sign up</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
