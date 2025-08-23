import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

 async function signUp(values) {
   setIsLoading(true)
    try {
      const {data} = await axios.post("https://linked-posts.routemisr.com/users/signup" ,values)
      console.log(data);
      toast.success(data.message)
      setIsLoading(false)
      navigate("/login")
    }
    catch(e){
      toast.error(e.response.data.error)
            setIsLoading(false)
    }
  }

  return (
    <>
      <section className="w-1/2 mx-auto shadow-2xl bg-indigo-900 dark:shadow-indigo-950  shadow-gray-600 my-10 p-10 rounded-xl text-center">
        <h1 className="text-3xl">Register Now</h1>

        <form action="" onSubmit={handleSubmit(signUp)}>
          {/* Name */}

          <input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
              minLength: {
                value: 5,
                message: "minimum Characters is 5",
              },
              maxLength: {
                value: 20,
                message: "minimum Characters is 20",
              },
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5 mt-5"
          />

          {errors?.name && touchedFields.name && (
            <p className="text-red-600 mb-3">
              {errors?.name?.message}
            </p>
          )}

          {/* Email */}
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required",
              },
              pattern: {
                value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                message: "Email is Invalid",
              },
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />
          {errors?.email && touchedFields.email && (
            <p className="text-red-600 mb-3">
              {errors?.email?.message}
            </p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must have a uppercase , lowercase , numbers ans special characters",
              },
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />

          {errors?.password && touchedFields.password && (
            <p className="text-red-600 mb-3">
              {errors?.password?.message}
            </p>
          )}

          {/* rePassword */}
          <input
            type="password"
            placeholder="rePassword"
            id="rePassword"
            {...register("rePassword", {
              required: {
                value: true,
                message: "Password is Required",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must have a uppercase , lowercase , numbers ans special characters",
              },
              validate : function(value){
                if(value === watch("password")){
                return true
                }
                return "repassword doesn't match password"
              }
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />


          {errors?.rePassword && touchedFields.rePassword && (
            <p className="text-red-600 mb-3">
              {errors?.rePassword?.message}
            </p>
          )}

          {/* dateOfBirth */}
          <input
            type="date"
            placeholder="date Of Birth"
            id="dateOfBirth"
            {...register("dateOfBirth", {
              required: {
                value: true,
                message: "date is required",
              },
              valueAsDate: true,
              validate : function(value){
                const currentDate = new Date().getFullYear()
                const userYear = value.getFullYear()
                  if(currentDate - userYear >= 18){
                    return true
                  }
                  return "you must be +18"
              }
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />

          {errors?.dateOfBirth && touchedFields.dateOfBirth && (
            <p className="text-red-600 mb-3">
              {errors?.dateOfBirth?.message}
            </p>
          )}
             {/* gender */}
          <div className="mb-5">
            <input
              type="radio"
              id="male"
              value={"male"}
              name="gender"
              {...register("gender")}
              className="radio radio-secondary me-3"
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              value={"female"}
              name="gender"
              {...register("gender" ,{
                required :{
                  value : true ,
                  message : "please Choose your Gender"
                }
              }
              )}
              className="radio radio-secondary me-3 ms-3"
            />
            <label htmlFor="female">Female</label>
          </div>
                    {errors?.gender && touchedFields.gender && (
            <p className="text-red-600 mb-3">
              {errors?.gender?.message}
            </p>
          )}

          <button className="btn btn-outline btn-secondary"> {isLoading? <i className="fa-spinner fa-spin fa-solid text-white" ></i> : "Submit"}</button>
        </form>
      </section>


    </>
  );
};

export default Register;
