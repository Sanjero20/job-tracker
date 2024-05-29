import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "@/services/auth.service";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Welcome Back</CardTitle>
        </CardHeader>

        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="flex w-[350px] flex-col gap-2 bg-white"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {error && <p className="text-sm text-error">* {error}</p>}

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>

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
