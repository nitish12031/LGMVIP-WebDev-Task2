import React from 'react';
import './List.css';
import ListItem from "./ListItem";


export const Lists = (props) => {
    return (
        <div className="list-container">
         {props.data && props.data.map((item)=>{
           return (<ListItem key={item.id} data={item}/>)
         })
         }
        </div>
    )
}
