import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successfully");
  };

  return (
    <>
      <div
        className="register-container"
      >
        <h1
        >
          Register Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="form-group"
          >
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="error">Username is Required</span>
            )}
          </div>
          <div
            className="form-group"
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              style={{
                
              }}
              {...register(
                "email",
                { required: true },
                {
                  pattern: /^[^s@]+@[^s@]+\.[^s@]+$/i,
                },
              )}
            />
            {errors.email && (
              <span className="error">Valid Email is Required</span>
            )}
          </div>
          <div
            className="form-group"
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters",
                },
              })}
            />
            {errors.password && (
              <span className="error">Password is Required</span>
            )}
          </div>
          <button 
          style={{
            marginTop:"10px",
            width:"100%",
            borderRadius:"15px",
            backgroundColor:"blue",
            padding:"10px 15px",
            color:"white"
          }} 
          type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;
