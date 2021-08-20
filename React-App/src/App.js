import React, {useState} from 'react';
import './App.css';
import Header from "./Component/Header";
import {Lists} from "./Component/Lists";
import axios from "axios";

function App() {
 
  let [userList, setUserList] = useState([]);
  let Arr=[];
  let count=1;
  
  
  const apiCall=()=>{
    if(count<3){
      console.log('inside if');
    axios({
      method: "get",
      url:"https://reqres.in/api/users?page="+count
    }).then((resp)=> {
      count++;
      Arr=[...Arr,...resp.data.data];
      apiCall();
    });
    }else{
      setUserList(Arr);
    }
  }

  const fetchUserList =()=>{
    apiCall();
  };




  return ( 
      <>
        <Header fetchUserList={fetchUserList}/>
        <Lists data={userList}/>
      </>
       
  );
}

export default App;
