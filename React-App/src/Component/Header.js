import React from 'react'
import './Header.css';

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><h3>LetsGrowMore</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <form className="form-inline my-4 my-lg-2">
          <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={props.fetchUserList}>GET USERS</button>
        </form>
      </div>
    </nav>
    )
}
