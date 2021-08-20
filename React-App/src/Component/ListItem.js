import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
    return (
          <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img className="profile" src={props.data.avatar} alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{props.data.first_name} {props.data.last_name}</h5>
                <p className="card-text">{props.data.email}</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ListItem;