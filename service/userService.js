import { url } from "../constants.mjs";
const URL = url + "/users";

export const validateUser = async ({ email, password }) => {
  const user = await fetch(URL + `?email=${email}&password=${password}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const response = await user.json();
  return response.length > 0;
};
