import {Table} from "./Table"
import {PictureModel} from "./PictureModel"
import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [datas,setDatas] = useState([]);

  //auto-refresh functionality which requests the data every 60 minutes and updates the table with the new data without reloading the web page
  useEffect(() =>{
    const fetchData = async() =>{
      // make sure to run php on localhost:8888
      const response = await fetch("http://localhost:8888/api");
      const json = await response.json();
      setDatas(json);
    }
    fetchData();
    const interval = setInterval(() =>{
      fetchData();
      console.log("rendered");
    },60*60*1000);
    return () => clearInterval(interval);
  },[])


  return (
    <>
    <PictureModel/>
     <Table body={datas.map((data) => ([
        data.task,
        data.title,
        data.description,
        data.colorCode
      ]))}/>
    </>
  )
}

export default App
