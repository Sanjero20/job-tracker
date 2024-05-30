import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormContainer from "@/components/form-container";

import { registerAccount } from "@/services/auth.service";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await registerAccount(email, password, confirmPass);
    const { token, error } = response;

    if (token) {
      setCookie("token", token);
      navigate("/");
    } else {
      setError(error);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      <FormContainer header="Create account">
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

          <Input
            type="password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            placeholder="Confirm password"
            required
          />

          {error && <p className="text-sm text-error">* {error}</p>}

          <Button type="submit" disabled={isLoading}>
            Register
          </Button>
        </form>
      </FormContainer>

      <p>
        Already have an account?{" "}
        <a
          onClick={() => navigate("/login")}
          className="cursor-pointer underline"
        >
          Login
        </a>
      </p>
    </div>
  );
}

export default RegisterPage;
