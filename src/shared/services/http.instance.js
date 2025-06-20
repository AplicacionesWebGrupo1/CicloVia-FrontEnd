import axios from "axios";

const httpInstance = axios.create({
    baseURL: "https://6854d8d46a6ef0ed66304c67.mockapi.io",
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
});

export default httpInstance;
