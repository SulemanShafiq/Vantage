import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/Validationform";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { setStatus }) => {
      try {
        setStatus(null);
        const { data } = await api.post("/api/auth/login", values);
        localStorage.setItem("token", data.token);
        localStorage.setItem(
          "user",
          JSON.stringify({ name: data.name, email: data.email, role: data.role })
        );
        navigate("/");
      } catch (err) {
        setStatus("Incorrect email or password.");
      }
    },
  });

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleFacebookLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/facebook";
  };

  const hasErrors =
    (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) ||
    formik.status;

  return (
    <div className="pt-20 px-10 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold mt-4">Login</h1>

      {hasErrors && (
        <div className="w-90">
          <h3 className="font-bold text-[15px] text-gray-900">
            ⚠ Please adjust the following:
          </h3>
          <p className="text-sm mt-1 ml-2">
            • {formik.status || "Incorrect email or password."}
          </p>
        </div>
      )}

      <div className="w-90">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
      </div>

      <div className="w-90">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 px-4 py-2 rounded w-full"
        />
      </div>

      <div className="w-89 text-left">
        <NavLink
          to="/recover"
          className="text-sm text-black cursor-pointer border-b border-black/20 w-37"
        >
          Forgot your password?
        </NavLink>
      </div>

      <button
        type="button"
        onClick={formik.handleSubmit}
        disabled={formik.isSubmitting}
        className="bg-[#D2B48C] text-white border-gray-300 cursor-pointer h-12 w-35"
      >
        {formik.isSubmitting ? "Signing in..." : "Sign in"}
      </button>

      <div className="flex flex-col gap-2 items-center">
        <NavLink to="/register" className="text-black border-b cursor-pointer w-29">
          Create account
        </NavLink>

        <button
          type="button"
          onClick={handleFacebookLogin}
          className="bg-[#4682B4] text-white border-gray-300 cursor-pointer h-10 w-[60vh] font-bold"
        >
          <span className="text-2xl font-bold">f</span>
          <span className="ml-2">Login with Facebook</span>
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="bg-[brown] text-white border-gray-300 font-bold cursor-pointer h-10 w-[60vh]"
        >
          <span className="text-2xl font-bold">G</span>
          <span className="ml-2">Login with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;