import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function OAuthRedirect() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: params.get("name"),
          email: params.get("email"),
          role: params.get("role"),
          picture: params.get("picture"),
        })
      );
      window.dispatchEvent(new Event("authchange"));
      navigate("/", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return <p className="pt-24 text-center">Signing you in...</p>;
}