import axios from "axios";

//extract value from cookie
export const getCookieValue = (name) => {
  const cookieValues = `; ${document.cookie}`;
  const parts = cookieValues.split(`; ${name}=`);

  if (parts.length === 2) {
    const value = parts.pop().split(";").shift();
    return value;
  }
  return null;
};

//configures request
export function configureRequest() {
  const axiosRequest = axios.create({
    baseURL: "http://127.0.0.1:5000/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosRequest;
}
