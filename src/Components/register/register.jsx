import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm();

  function singup(values) {
    console.log(values);
  }

  return (
    <>
      <section className="w-1/2 mx-auto shadow-2xl bg-indigo-900 dark:shadow-indigo-950  shadow-gray-600 my-10 p-10 rounded-xl text-center">
        <h1 className="text-3xl">Register Now</h1>

        <form action="" onSubmit={handleSubmit(singup)}>
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
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />
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
            })}
            className="input input-secondary w-full bg-indigo-900 mb-5"
          />
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
              {...register("gender")}
              className="radio radio-secondary me-3 ms-3"
            />
            <label htmlFor="female">Female</label>
          </div>
          <button className="btn btn-outline btn-secondary">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Register;
