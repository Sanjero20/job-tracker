import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormContainer from "@/components/form-container";

import { loginAccount } from "@/services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    const { token, error } = await loginAccount(email, password);
    setIsLoading(false);

    if (token) {
      setCookie("token", token);
      navigate("/");
    } else {
      setError(error);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <FormContainer header="Welcome Back">
        <form
          onSubmit={handleSubmit}
          className="flex w-[350px] flex-col gap-2 bg-white"
        >
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />

          {error && <p className="text-sm text-error">* {error}</p>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </FormContainer>

      <p>
        Don't have an account?{" "}
        <a
          onClick={() => navigate("/register")}
          className="cursor-pointer underline"
        >
          Create one
        </a>
      </p>
    </div>
  );
}
export default LoginPage;
