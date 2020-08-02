import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="col-md-6">
                  <h2 className="display-3 mb-4">InstaConnect</h2>
                  <p className="lead1">
                    A simple, fun & creative way to connect with friends & family.
                  </p>
                  <hr />
                  <div className="login">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 m-auto">
                          <p className="lead text-center">
                            Sign in to your InstaConnect account
                          </p>
                          <form action="myprofile.html">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Email Address"
                                name="email"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="Password"
                                name="password"
                              />
                            </div>
                            <input
                              type="submit"
                              className="btn btn-info btn-block mt-4"
                            />
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />

                  <p>
                    Don't have an account? &nbsp;
                    <Link to="/register" className="btn btn-lg btn-info mr-2">
                      Sign Up
                    </Link>
                  </p>
                </div>
                <div className="col-md-6">
                  <div class="image">
                    <img src="./img/landing-page.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
