import { ChangeEvent, FormEvent, useState } from "react";
import { SquareUserRound } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useAccount } from "@/stores/account";
import { updateUserInfo } from "@/services/account.service";

function AccountInfo() {
  const { name, email, setInfo } = useAccount();
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name,
    email,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const resetChanges = () => {
    setValues({ name, email });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const response = await updateUserInfo(values);
    const { name, email } = await response;

    if (response) {
      setInfo(name, email);
    }

    setIsLoading(false);
  };

  return (
    <section className="">
      <div className="mb-2 flex items-center gap-2 text-gray-600">
        <SquareUserRound size={24} color="gray" />
        <h2 className="text-xl">User Information</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />

        {values.email != email || values.name != name ? (
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant={"outline"}
              onClick={resetChanges}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" className="w-40" disabled={isLoading}>
              Save Changes
            </Button>
          </div>
        ) : (
          <></>
        )}
      </form>
    </section>
  );
}

export default AccountInfo;
