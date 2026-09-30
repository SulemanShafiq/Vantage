import { useFormik } from 'formik';
import formValidationSchema from "../utils/Validationform";

function Register() {
  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
    },
  });

  const Error = (field) =>
    formik.touched[field] &&
    formik.errors[field] && (
      <p className="text-[#c0392b] text-[11px] mt-1">
        {formik.errors[field]}
      </p>
    );

  return (
    <div className="pt-24 px-10 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold mb-4">Create Account</h1>

      

      <div className="flex flex-col gap-4 w-full max-w-md">

        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            <span className="text-[#1b2a4a] mr-1">*</span>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-10 border border-[#7d90b0] px-2 text-sm outline-none focus:border-[#1b2a4a]"
          />
          {Error('firstName')}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            <span className="text-[#1b2a4a] mr-1">*</span>
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-10 border border-[#7d90b0] px-2 text-sm outline-none focus:border-[#1b2a4a]"
          />
          {Error('lastName')}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            <span className="text-[#1b2a4a] mr-1">*</span>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-10 border border-[#7d90b0] px-2 text-sm outline-none focus:border-[#1b2a4a]"
          />
          {Error('email')}
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold">
            <span className="text-[#1b2a4a] mr-1">*</span>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-10 border border-[#7d90b0] px-2 text-sm outline-none focus:border-[#1b2a4a]"
          />
          {Error('password')}
        </div>

        <button
  onClick={formik.handleSubmit}
  className="bg-[#4682B4] text-white h-11 w-30 mx-auto mt-2 font-semibold hover:bg-[#13203a]"
>
  Create 
</button>

      </div>
    </div>
  );
}

export default Register;