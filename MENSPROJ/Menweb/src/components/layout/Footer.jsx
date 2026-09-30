import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-auto bg-white text-black px-10 pt-12 pb-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">

        <div className="max-w-sm">
          <h2 className="text-lg font-bold mb-3">NEWSLETTER SIGNUP</h2>
          <p className="text-sm text-gray-500 mb-3">
            Join our newsletter to stay up to date with our latest happenings.
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 h-11 w-full px-3 pr-14 outline-none text-sm"
            />
            <button
              onClick={() => alert("Thank you for subscribing!")}
              className="absolute right-0 top-0 h-11 w-11 flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="text-sm font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">Delivery Information</Link></li>
              <li><Link to="#" className="hover:text-black">Track your order</Link></li>
              <li><Link to="#" className="hover:text-black">Return Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Get in touch</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">FAQs</Link></li>
              <li><Link to="#" className="hover:text-black">Contact us</Link></li>
              <li><Link to="#" className="hover:text-black">Store Locator</Link></li>
              <li><Link to="#" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-black">About Cookies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Vantage</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-black">About us</Link></li>
              <li><Link to="#" className="hover:text-black">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start lg:items-end gap-8">
          <div className="flex items-center gap-2 text-xl font-bold">
            VANTAGE
          </div>
         

<div className="flex items-center gap-4">
  <Link to="#" className="text-black hover:text-gray-600">
    <FaFacebookF size={16} />
  </Link>
  <Link to="#" className="text-black hover:text-gray-600">
    <FaInstagram size={18} />
  </Link>
  <Link to="#" className="text-black hover:text-gray-600">
    <FaYoutube size={18} />
  </Link>
</div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-200 pt-5 text-xs text-gray-500">
        © {new Date().getFullYear()} Vantage. All rights reserved.
      </div>
    </footer>
  );
}