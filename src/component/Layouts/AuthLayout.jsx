import Logo from "../Elements/Logo";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";
import { motion } from "framer-motion";

const AuthLayout = ({ children, type }) => {
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);

  return (
    <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      {isLoading && <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />}
      {msg && (
        <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
        />
      )}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", duration: 0.4, bounce: 0.5 },
        }}
        className="w-full max-w-sm"
      >
        <Logo />
        <div className="mt-16">{children}</div>
        {type !== "forgotpw" && (
          <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col static">
            <div className="border border-gray-05 w-full"></div>
            <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
          </div>
        )}
        {type !== "forgotpw" && (
          <div className="mb-8">
            <button
              className="h-12 flex items-center justify-center rounded-md text-sm w-full bg-gray-05 text-gray-01"
              type="button"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                {/* Google SVG paths */}
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        )}
        {type !== "forgotpw" && (
          <div className="flex justify-center">
            {type === "sign up" ? (
              <div>
                <span className="text-sm text-gray-03">Already have an account?&nbsp;</span>
                <Link to="/login" className="text-primary text-sm font-bold">
                  Sign In Here
                </Link>
              </div>
            ) : (
              <Link to="/register" className="text-primary text-sm font-bold">
                Create an account
              </Link>
            )}
          </div>
        )}
        {type === "sign in" && (
          <div className="flex flex-col items-center">
            <br />
            <Link to="/forgotpw" className="text-gray-500 text-sm">
              Forgot Password
            </Link>
          </div>
        )}
        {type === "forgotpw" && (
          <div className="flex flex-col items-center">
            <br />
            <Link to="/login" className="text-gray-500 text-sm">
              Back to Login
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AuthLayout;
