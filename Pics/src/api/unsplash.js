import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID 1z45FY3x9YXrRwlY6YFA7SBLTM3gdsjp4k8AZMZnkpw'
    }
});