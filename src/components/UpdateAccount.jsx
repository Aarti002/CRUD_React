import React, { Component } from "react";
import AccountService from "../services/AccountService";

class UpdateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      email: "",
      phone: "",
    };

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdateAccount = this.saveOrUpdateAccount.bind(this);
  }

  componentDidMount() {
    AccountService.getAccount(this.state.id).then((res) => {
      let acc = res.data;
      this.setState({ name: acc.name, email: acc.email, phone: acc.phone });
    });
  }

  saveOrUpdateAccount = (e) => {
    e.preventDefault();
    let account = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };
    AccountService.editAccount(account, this.state.id).then((res) => {
      this.props.history.push("/accounts");
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePhoneHandler = (event) => {
    this.setState({ phone: event.target.value });
  };

  cancel() {
    this.props.history.push("/accounts");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <h4 className="text-center">Update Account Details </h4>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Name: </label>
                    <input
                      placeholder="Name"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Phone: </label>
                    <input
                      placeholder="Phone"
                      name="phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changePhoneHandler}
                    />
                  </div>

                  <button
                    className="btn btn-secondary my-2"
                    onClick={this.saveOrUpdateAccount}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary my-2"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateAccount;
