import axios from 'axios';

// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
// axios.defaults.withCredentials = true;

const client = axios.create({
    baseURL: " http://34.29.48.120/:8000/api/",
    
})


export default client