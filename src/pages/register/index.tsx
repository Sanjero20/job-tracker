import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormContainer from "@/components/form-container";

import { registerAccount } from "@/services/auth.service";
import { IAccountReg } from "@/types";

const initialState: IAccountReg = {
  name: "",
  email: "",
  password: "",
  cPassword: "",
};

function RegisterPage() {
  const [data, setData] = useState(initialState);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [, setCookie] = useCookies();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await registerAccount(data);
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
          className="flex w-[400px] flex-col gap-2 bg-white"
        >
          <Input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="off"
            required
          />

          <Input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <Input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <Input
            type="password"
            name="cPassword"
            value={data.cPassword}
            onChange={handleChange}
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
