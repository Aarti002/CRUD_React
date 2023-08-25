import axios from "axios";

const ACCOUNT_API_BASE_URL = "http://localhost:8080/api/v1";

class AccountService {
  getAccounts() {
    return axios.get(ACCOUNT_API_BASE_URL + "/getAccounts");
  }

  addAccount(account) {
    return axios.post(ACCOUNT_API_BASE_URL + "/addAccount", account);
  }

  getAccount(accountId) {
    return axios.get(ACCOUNT_API_BASE_URL + "/getAccount/" + accountId);
  }

  editAccount(account, accountId) {
    return axios.put(
      ACCOUNT_API_BASE_URL + "/editAccount/" + accountId,
      account
    );
  }

  deleteAccount(accountId) {
    return axios.delete(ACCOUNT_API_BASE_URL + "/deleteAccount/" + accountId);
  }
}

export default new AccountService();
