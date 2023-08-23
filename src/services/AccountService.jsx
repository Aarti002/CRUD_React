import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1";

class AccountService {
  getAccounts() {
    return axios.get(ACCOUNT_API_BASE_URL + "/accounts");
  }

  addAccount(account) {
    return axios.post(ACCOUNT_API_BASE_URL + "/addAccount", account);
  }

  getAccount(accountId) {
    return axios.get(ACCOUNT_API_BASE_URL + "/" + accountId);
  }

  editAccount(account, accountId) {
    return axios.put(ACCOUNT_API_BASE_URL + "/" + accountId, account);
  }

  deleteAccount(accountId) {
    return axios.delete(ACCOUNT_API_BASE_URL + "/" + accountId);
  }
}

export default new AccountService();
