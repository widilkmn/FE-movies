import { FormEvent, useState } from "react";

import { postLogin } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
      const response = await postLogin(payload);
      if (response?.token) {
        localStorage.setItem("token", response?.token as string);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {handleSubmit, setUsername, setPassword};
};

export default useAuth;
