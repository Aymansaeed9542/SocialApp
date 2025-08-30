import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/authContext";
const Login = () => {

  const {insertUserToken} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  async function logIn(values) {
    setIsLoading(true)
    try {
      const {data} = await axios.post("https://linked-posts.routemisr.com/users/signin" ,values)
      console.log(data);
      toast.success(data.message)
      setIsLoading(false)
      localStorage.setItem("token" , data.token)
      insertUserToken(data.token)
      navigate("/home")
    }
    catch(e){
      toast.error(e.response.data.error)
            setIsLoading(false)
    }
  }

  return (
    <>
      <section className="w-1/2 mx-auto shadow-2xl bg-indigo-900 dark:shadow-indigo-950  shadow-gray-600 my-10 p-10 rounded-xl text-center">
        <h1 className="text-3xl mb-5">Login Now</h1>

        <form action="" onSubmit={handleSubmit (logIn)}>
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


          <button className="btn btn-outline btn-secondary"> {isLoading? <i className="fa-spinner fa-spin fa-solid text-white" ></i> : "Login"}</button>
        </form>
      </section>


    </>
  );
};

export default Login;
