import React, { Component } from "react";
import AccountService from "../services/AccountService";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import UpdateAccount from "./UpdateAccount";
import { Link } from "react-router-dom";

class ListAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
    };
    this.addAccount = this.addAccount.bind(this);
    this.editAccount = this.editAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  deleteAccount(id) {
    AccountService.deleteAccount(id).then((res) => {
      this.setState({
        accounts: this.state.accounts.filter((account) => account.id !== id),
      });
    });
  }

  getAccount(id) {
    console.log(this.props.history);
    this.props.history.push(`/view_account/${id}`);
  }

  editAccount(id) {
    this.props.history.push(`/edit_account/${id}`);
  }

  addAccount() {
    this.props.history.push(`/add_account`);
  }

  componentDidMount() {
    AccountService.getAccounts().then((res) => {
      this.setState({ accounts: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center my-2">Account List</h2>

        <button className="btn btn-primary mx-2" onClick={this.addAccount}>
          Add Account
        </button>

        <br></br>
        <div className="row">
          <table
            className="table table-hover table-bordered mx-2 my-2"
            responsive="sm"
          >
            <thead>
              <tr className="">
                <th> ID </th>
                <th> Name</th>
                <th> Email</th>
                <th> Phone</th>
                <th> Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.accounts.map((acc) => (
                <tr key={acc.id}>
                  <td> {acc.id} </td>
                  <td> {acc.name} </td>
                  <td> {acc.email}</td>
                  <td> {acc.phone}</td>
                  <td>
                    <button
                      onClick={() => this.editAccount(acc.id)}
                      className="btn btn-info"
                    >
                      Update{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteAccount(acc.id)}
                      className="btn btn-secondary"
                    >
                      Delete{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      className="btn btn-info"
                      onClick={() => this.getAccount(acc.id)}
                    >
                      View{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAccounts;
