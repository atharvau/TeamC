import React, { Component } from "react";
class Carded extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <div className="card-group">
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-danger">
                    <i className="ti-clipboard text-white" />
                  </span>
                </div>
                <div> New projects</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">23</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg btn-info">
                    <i className="ti-wallet text-white" />
                  </span>
                </div>
                <div> Total Earnings</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light"> 113</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-success">
                    <i className="ti-shopping-cart text-white" />
                  </span>
                </div>
                <div> Total Sales</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light"> 43</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          {/* Card */}
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <span className="btn btn-circle btn-lg bg-warning">
                    <i className="mdi mdi-currency-usd text-white" />
                  </span>
                </div>
                <div>Profit</div>
                <div className="ml-auto">
                  <h2 className="m-b-0 font-light">63</h2>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          {/* Column */}
        </div>
      </div>
    );
  }
}

export default Carded;
