"use client";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa6";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <section className="mt-8 max-w-md mx-auto">
      <h1 className="text-primary font-semibold text-4xl text-center">Login</h1>
      <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="border-gray-200 border-2 w-full p-2 rounded-sm mb-2"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <input
          className="border-gray-200 border-2 w-full p-2 rounded-sm mb-5"
          placeholder="Password"
          {...register("password", { required: true })}
        />

        {/* errors will return when field validation fails  */}
        {/* {errors.password || errors.email && <span>This field is required</span>} */}

        <input
          className="bg-primary rounded-sm text-white w-full py-2 cursor-pointer"
          type="submit"
        />
        <div className="text-center mt-3">Or login with</div>
        <div className="mt-2">
          <div className="border-2 border-gray-200 rounded-sm text-lg py-2 text-center cursor-pointer flex items-center gap-2 justify-center">
            {" "}
            <FaGoogle />
            Login with Google
          </div>
        </div>
      </form>
    </section>
  );
}
