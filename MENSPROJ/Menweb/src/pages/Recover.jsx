import { useFormik } from 'formik';
import { recoverValidationSchema } from "../utils/Validationform";

function Recover() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: recoverValidationSchema,
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
      <h1 className="text-4xl font-bold mb-1 text-[#707070]">Reset Your Password</h1>
      <h6 className="text-base text-xs text-[#707070] mb-1">
        We will send an email to reset your password
      </h6>

      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-1">
          
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full h-10 border  border-gray-200 px-2 text-sm outline-none focus:border"
          />
          {Error('email')}
        </div>

        <button
          onClick={formik.handleSubmit}
          className="bg-[#4A4A4A] text-white h-11 w-40 mx-auto mt-2 font-semibold hover:bg-[#13203a]"
        >
          Send Email
        </button>
      </div>
    </div>
  );
}

export default Recover;