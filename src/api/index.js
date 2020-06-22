import axios from 'axios'

const config = {
    baseUrl: 'http://springnet.synology.me:9999/'
}

function fetchPayNews(){
    return axios.get(`${config.baseUrl}paynews`);
}

function fetchBenefits(){
    return axios.get(`${config.baseUrl}bnenfits`);
}

function fetchHistory(){
    return axios.get(`${config.baseUrl}histories`);
}

function fetchAccount(){
    return axios.get(`${config.baseUrl}accounts`);
}
function fetchCardList(){
    return axios.get(`${config.baseUrl}card-lists`);
}
export { fetchPayNews, fetchBenefits, fetchHistory, fetchAccount, fetchCardList }