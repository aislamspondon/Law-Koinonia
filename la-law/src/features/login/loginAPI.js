import axios from "axios";
export const getLogin = async ({ email, password }) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const convertEmail = email.split("@")[0];
  const response = await axios.post(
    "http://127.0.0.1:8000/api/auth/login/",
    { username: convertEmail, password: password },
    config
  );
  localStorage.setItem("userInfo", JSON.stringify(response.data));
  return response.data;
};
