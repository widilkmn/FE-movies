import { ChangeEvent, FormEvent, useState } from "react";

import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault;
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
      const response = await postLogin(payload);
      localStorage.setItem("token", response?.token as string);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-row justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-5"
      >
        <label className="font-bold">Authentication</label>
        <input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          className="rounded-md border border-gray-500"
          required
        />
        <input
          type="password"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          className="rounded-md border border-gray-500"
          required
        />
        <button type="submit" className="bg-black text-white px-3 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Authentication;
