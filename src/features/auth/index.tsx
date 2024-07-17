import { ChangeEvent } from "react";
import useAuth from "./hooks/useAuth";

const Authentication = () => {
  const { handleSubmit, setUsername, setPassword } = useAuth();

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
