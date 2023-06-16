import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import Loading from "../../Loading/Loading";
import loginImg from "../../image/login-signUp.jpg"
import useTitle from "../../Hooks/useTitle";
const SignUp = () => {
  useTitle("SignUP");
  const [PasswordShow, setPasswordShow] = useState(true);
  const { createUser, GetProfile } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError(" add at least one uppercase ");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setPasswordError("add at least two number");
      return;
    } else if (password.length < 6) {
      setPasswordError("Password must be 6 characters");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError(" password is not match");
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        // setUser(loggedInUser);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoto("");
        form.reset();
        navigate("/login");
        toast.success(" Successfully SignUp");
        GetProfile(result.user, name, photo)
          .then(() => {
            console.log("done");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        // // setError(error.message);
        // if (passwordError === error.message) {
        //   setPasswordError("Email already in use");
        // }
        setPasswordError(error.message);
      });
  };
  const handleEmail = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const handlePassword = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };
  const handleConfirmPassword = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
  };
  const handleURL = (e) => {
    const image = e.target.value;
    setPhoto(image);
  };
  const handleName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 gap-10 flex flex-col items-center justify-center">
      <div className="flex items-center  flex-col md:flex-row-reverse gap-10">
        <div>
          <img src={loginImg} alt="" />
        </div>

        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  bg-[#042b80]">
          <h1 className="text-2xl font-bold text-center text-white">
            SIGN UP
          </h1>
          <form onSubmit={handleSubmitForm} action="" className="space-y-6 ">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleName}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-white00">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmail}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block text-white">
                Password
              </label>
              <input
                type={PasswordShow ? "password" : "text"}
                name="password"
                id="password"
                value={password}
                onChange={handlePassword}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400 mb-2"
                required
              />

              {PasswordShow ? (
                <FaEyeSlash
                  className="absolute right-3 bottom-0 top-9 cursor-pointer"
                  onClick={() => setPasswordShow(!PasswordShow)}
                ></FaEyeSlash>
              ) : (
                <FaEye
                  onClick={() => setPasswordShow(!PasswordShow)}
                  className="absolute right-3 bottom-0 top-9 cursor-pointer"
                ></FaEye>
              )}
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block text-white">
                Confirm Password
              </label>
              <input
                type={PasswordShow ? "password" : "text"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
              {PasswordShow ? (
                <FaEyeSlash
                  className="absolute right-3 bottom-0 top-9 cursor-pointer"
                  onClick={() => setPasswordShow(!PasswordShow)}
                ></FaEyeSlash>
              ) : (
                <FaEye
                  onClick={() => setPasswordShow(!PasswordShow)}
                  className="absolute right-3 bottom-0 top-9 cursor-pointer"
                ></FaEye>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-white">
                Photo URL
              </label>
              <input
                type="text"
                name="text"
                id="text"
                onChange={handleURL}
                placeholder="Photo URL"
                className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="mt-6 text-center">
              {passwordError && (
                <span className="text-red-600">{passwordError}</span>
              )}
            </div>
            <button className="block w-full p-3 text-center rounded-sm bg-violet-300  ">
              Sign up
            </button>
          </form>

          <p className="text-base text-center sm:px-6 text-white">
            already have an account?
            <Link className="text-orange-600 ml-2 btn-link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
