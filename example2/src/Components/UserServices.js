import axios from 'axios';

const URL = "http://localhost:8080/api/v1/User/create";
const getURL = "http://localhost:8080/api/v1/User";
// const SERVICE_API_BASE_URL = "http://localhost:3000/Form";

class UserServices {
    // crud operation
   
  
    createUserService(data) {
        console.log(data)
        return axios.post(URL, data);

    }
    getUserService() {
        return axios.get(getURL);
    }
   
}
export default new UserServices();