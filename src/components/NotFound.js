import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10 mx-auto text-center text-title text-uppercase py-5">
            <h1 className="display-4">404</h1>
            <h1>error</h1>
            <h2>Page Not Found</h2>
            <h3>
              the requested url {' '}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              {' '}was not found.
            </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
