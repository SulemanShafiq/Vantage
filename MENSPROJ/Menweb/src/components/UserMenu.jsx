import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User } from "lucide-react";

function readUser() {
  try {
    return localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;
  } catch {
    return null;
  }
}

export default function UserMenu() {
  const navigate = useNavigate();
  const [user, setUser] = useState(readUser);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const sync = () => setUser(readUser());
    window.addEventListener("authchange", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("authchange", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authchange"));
    setOpen(false);
    navigate("/login");
  };

  // Login nahi hai: purana icon, login page ka link
  if (!user) {
    return (
      <NavLink to="/login" aria-label="Login">
        <User size={22} />
      </NavLink>
    );
  }

  const initial = (user.name || user.email || "U").charAt(0).toUpperCase();

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#D2B48C] text-white font-bold cursor-pointer"
        aria-label="Account menu"
      >
        {user.picture ? (
          <img
            src={user.picture}
            alt={user.name || "Profile"}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        ) : (
          initial
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-semibold truncate">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}