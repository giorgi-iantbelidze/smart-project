"use client";
import style from "./page.module.css";

import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
const schema = yup.object().shape({
  username: yup
    .string()
    .required("username is required!")
    .min(4, "Minimun 4 charapters")
    .max(20, "Maximum 20 charapters"),
  lastname: yup
    .string()
    .required("username is required!")
    .min(4, "Minimun 4 charapters")
    .max(20, "Maximum 20 charapters"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Number is requyred")
    .min(13, "minimum charapter is 13")
    .max(120, "Maximum charapter is 120"),
  email: yup.string().required("Email is required").email("invalid"),
  password: yup
    .string()
    .required("password is required")
    .min(6, "Minimum is charapters")
    .max(12, "Maximum 10 charapters")
    .matches(passwordRules, { message: "please create a stronger password" }),
});
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const handleRegister = async (data) => {
    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Cpntent-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      if (result?.username) {
        redirect("/product");
        reset();
      }
    } catch (error) {}
  };
  return (
    <div className="parent">
      <Image
        className={style.image}
        src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fregistration-gold-text-black-background-d-rendered-royalty-free-stock-picture-image-can-be-used-online-website-87913970.jpg&sp=1748871667T229d0ae3467a1eab114ceeea336396acd6a72e97c4c10bbdc726b370341b46c7"
        alt="poto"
        width={1920}
        height={765}
      />
      <div className={style.child1}>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className={style.container}
        >
          <h2 className={style.hh}>Add New User</h2>
          <div>
            <label className={style.label}>Firstname:</label>
            <br />
            <br />
            <input
              {...register("username")}
              placeholder="Firstname"
              className={style.input}
            ></input>
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div>
            <label className={style.label}>Lastname:</label>
            <br />
            <br />
            <input
              {...register("lastname")}
              placeholder="Lastname"
              className={style.input}
            ></input>
            {errors.lastname && <p>{errors.lastname.message}</p>}
          </div>
          <div>
            <label className={style.label}>Age:</label>
            <br />
            <br />
            <input
              {...register("age")}
              placeholder="Age"
              className={style.input}
            ></input>
            {errors.age && <p>{errors.age.message}</p>}
          </div>

          <div>
            <label className={style.label}>Email:</label>
            <br />
            <br />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className={style.input}
            ></input>
            {errors.username && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label className={style.label}>Password:</label>
            <br />
            <br />
            <input
              {...register("password")}
              type="Password"
              placeholder="password"
              className={style.input}
            ></input>
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className={style.register}>
            <button type="Submit" className={style.btn1}>
              Sign Up
            </button>
          </div>
        </form>
        <Link href={"/signup/login"}>
          <button className={style.btn2}>Alroady register? sign in</button>
        </Link>
      </div>
    </div>
  );
};
export default Register;
