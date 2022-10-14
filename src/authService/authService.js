import axios from "axios";
import {baseUrl} from "./baseUrl";

export const get = (route) => {
    let token = localStorage.getItem("authToken");

    return axios.get(process.env.REACT_APP_BASE_URL + route, {
        headers: {Authorization: `Bearer ${token}`}
    });

};

export const post = (route, body) => {
    let token = localStorage.getItem("authToken");

    return axios.post(process.env.REACT_APP_BASE_URL + route, body, {
        headers: {Authorization: `Bearer ${token}`},
    });

};