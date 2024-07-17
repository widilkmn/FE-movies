import { AuthPayload, AuthResponse } from "./type";

import { API } from ".";

const postLogin = async (payLoad: AuthPayload) => {
  try {
    const response = await API.post(
      "https://dummyjson.com/auth/login",
      payLoad
    );

    console.log(response);

    return response.data as AuthResponse;
  } catch (error) {
    console.log(error);
  }
};

export { postLogin };
