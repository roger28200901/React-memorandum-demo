import { useState, useEffect ,useRef } from "react";
import { API_GET_DATA } from '../../global/constants'


import Edit from "./components/Edit";
import List from "./components/List";

import "./index.css";

// Google : Style component
// const app = {
//     color : 'red'
// }

async function fetchData (setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    console.log(data)
    setData(data)
}

async function uploadData (data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type' : 'application/json'
        },
        body : JSON.stringify({data})
    })
    
}


async function callAPI () {
    
}
const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false)

  console.log("status"+ submittingStatus.current)

  useEffect(()=> {  
    if (submittingStatus.current == false) {
        return
    }
    uploadData(data).then(submittingStatus.current = false)
  },[data])


  // useEffect 後面綁定的data 如果有變動的話 就產生modal 
  useEffect(()=> {
    fetchData(setData)
  }, [])
  
  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus}/>
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus}/>
    </div>
  );
};

export default Home;
