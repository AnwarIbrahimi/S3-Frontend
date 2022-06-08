import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1/accounts";
const API_BASE_URL = "http://localhost:8080/api/v1/email";

class AccountServices {

    getAccounts() {
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    createAccount(account){
        return axios.post(ACCOUNT_API_BASE_URL, account);
    }

    getAccountById(accountId){
        return axios.get(ACCOUNT_API_BASE_URL + '/' + accountId);
    }

    updateAccount(account, accountId){
        return axios.put(ACCOUNT_API_BASE_URL + '/' + accountId, account);
    }

    deleteAccount(accountId){
        return axios.delete(ACCOUNT_API_BASE_URL + '/' + accountId);
    }

    LoginUser (emailId) {
        return axios.get(API_BASE_URL + '/' + emailId);
    }

}

export default new AccountServices()