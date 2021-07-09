import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IM4SYzHycoQOHRKaoL0fHRs53_jp8zFUrgMIt-KA24A',
    }
});
