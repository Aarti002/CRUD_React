import React, { Component, useState } from "react";
import AccountService from "../services/AccountService";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import UpdateAccount from "./UpdateAccount";
import { Link } from "react-router-dom";

class ListAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      filterAccounts: [],
    };
    this.addAccount = this.addAccount.bind(this);
    this.editAccount = this.editAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
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

  filterBySearch(event) {
    AccountService.getAccounts().then((res) => {
      this.setState({ accounts: res.data });
    });
    const query = event.target.value;
    let updateList = [...this.state.accounts];
    console.log(updateList);
    updateList = updateList.filter((itm) => {
      return itm.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    this.setState({ filterAccounts: updateList });
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary mx-2 my-2" onClick={this.addAccount}>
          Add Account
        </button>

        <br></br>
        <div className="row mx-2 my-2">
          <div className="search-header">
            <div className="search-text mx-2 my-2">
              Search:
              <input
                id="search-box"
                className="mx-2"
                onChange={this.filterBySearch}
              />
            </div>
          </div>
          <br></br>
          <h4 className="text-center my-2">Search List</h4>
          <br></br>
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
              {Array.isArray(this.state.filterAccounts)
                ? this.state.filterAccounts.map((acc) => (
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
                  ))
                : null}
            </tbody>
          </table>

          <hr />
          <br></br>

          <h4 className="text-center my-2">Account List</h4>
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
              {Array.isArray(this.state.accounts)
                ? this.state.accounts.map((acc) => (
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
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAccounts;
