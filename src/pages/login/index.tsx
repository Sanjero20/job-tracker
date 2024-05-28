import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { loginAccount } from "@/services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { token, error } = await loginAccount(email, password);

    if (error) {
      setError(error);
      return;
    }

    if (token) {
      setCookie("token", token);
      navigate("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex w-40 flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
