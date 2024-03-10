import axios from 'axios';

const SERVICE_API_BASE_URL = "http://localhost:8080/api/v1/Service";
// const SERVICE_API_BASE_URL = "http://localhost:3000/Form";

class Services {
    // crud operation
    getService() {
        return axios.get(SERVICE_API_BASE_URL);
    }
    getServiceById(serviceId) {
        return axios.get(SERVICE_API_BASE_URL + '/' + serviceId);

    }
    createService(data) {
        console.log(data)
        return axios.post(SERVICE_API_BASE_URL, data);

    }
    editService(serviceId, service) {
        console.log(service);
        return axios.put(SERVICE_API_BASE_URL + '/' + serviceId, service);

    }

    deleteService(serviceId) {

        return axios.delete(SERVICE_API_BASE_URL + '/' + serviceId);
    }
}
export default new Services();