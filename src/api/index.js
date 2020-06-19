import axios from 'axios'

const config = {
    baseUrl: 'http://localhost:1337/'
}

function fetchNewsList(){
    return axios.get(`${config.baseUrl}paynews`);
}

function fetchBenefitList(){
    return axios.get(`${config.baseUrl}benefit`);
}

function fetchHistory(){
    return axios.get(`${config.baseUrl}history`);
}

function fetchAccount(){
    return axios.get(`${config.baseUrl}account`);
}

export { fetchNewsList, fetchBenefitList, fetchHistory, fetchAccount }