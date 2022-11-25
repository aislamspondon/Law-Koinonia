import axios from "axios";
export const getSignUp = async ({
  first_name,
  last_name,
  email,
  phone_number,
  password,
  practice_court,
  current_status,
}) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const phone_numberconvert = `+88${phone_number}`;
  const response = await axios.post(
    "http://127.0.0.1:8000/api/auth/create/",
    {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_numberconvert,
      password: password,
      practice_court: practice_court,
      current_status: current_status,
    },
    config
  );
  localStorage.setItem("userInfo", JSON.stringify(response.data));
  return response.data;
};
