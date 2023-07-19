const URL = "http://localhost:3000" + "/users";

export const validateUser = async({ email, password }) =>{
  const user = await fetch(URL + `?email=${email}&password=${password}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const response = await user.json();
  return response.length>0?true:false
}
