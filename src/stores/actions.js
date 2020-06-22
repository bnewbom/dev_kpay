import { 
    fetchPayNews, 
    fetchBenefits,
    fetchHistory,
    fetchAccount, 
    fetchCardList,
} from '../api/index.js';

export default {
    FETCH_PAYNEWS({ commit }) {
        return fetchPayNews().then(response => commit('SET_PAYNEWS', response.data));
    },
    FETCH_BENEFITS({ commit }){
        return fetchBenefits().then(response => commit('SET_BENEFITS', response.data));
    },
    FETCH_HISTORY({ commit }){
        return fetchHistory().then(response => commit('SET_HISTORY', response.data));
    },
    FETCH_ACCOUNT({ commit }){
        return fetchAccount().then(response => commit('SET_ACCOUNT', response.data));
    },
    FETCH_CARDLIST({ commit }){
        return fetchCardList().then(response => commit('SET_CARDLIST', response.data));
    }
}