import axios from "axios";

let baseURL = "http://localhost:3000/api";

async function getUser(token) {
    
  let res = await axios.get(`${baseURL}/auth`, {
    headers: { "x-auth-token": token },
  });

  return res.data;
}

export default { getUser };
