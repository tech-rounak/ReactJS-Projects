import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-my-burger-e4a3c-default-rtdb.firebaseio.com/'
});
export default instance;