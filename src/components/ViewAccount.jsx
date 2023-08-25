import React, { Component } from "react";
import AccountService from "../services/AccountService";

class ViewAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      account: {},
    };
  }

  componentDidMount() {
    AccountService.getAccount(this.state.id).then((res) => {
      this.setState({ account: res.data });
    });
  }

  goBack() {
    this.props.history.push("/accounts");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <h4 className="text-center">View Account Details</h4>
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <b>Name: </b>
                    <span>{this.state.account.name}</span>
                  </div>
                  <div className="form-group">
                    <b>Email: </b>
                    <span>{this.state.account.email}</span>
                  </div>
                  <div className="form-group">
                    <b>Phone: </b>
                    <span>{this.state.account.phone}</span>
                  </div>
                </form>
                <button
                  className="btn btn-secondary my-2"
                  onClick={this.goBack.bind(this)}
                  style={{ marginLeft: "1rem" }}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewAccount;
