import { Link, useRouteError } from "react-router-dom";
// import errorImg from "../assets/90333-error.json";
// import Lottie from "react-lottie";
import errorImg from "../image/errorImg.jpg"
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="w-full  md:w-1/3 lg:w-2/5">
          {/* <Lottie animationData={errorImg} loop={true}></Lottie> */}
          <img
            className="w-[400px] h-[300px] mx-auto"
            src={errorImg}
            alt=""
          />
        </div>
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-bold rounded bg-red-600 text-white"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
