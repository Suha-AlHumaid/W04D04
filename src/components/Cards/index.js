import React, { useEffect } from "react";
import { useState } from "react";
// import { useHistory } from "react-router";
import axios from "axios";
import "./style.css";


const Cards = () => {

  const [arr, setArr]= useState([]);

useEffect ( ()=>{ getPo()},[]);
 
  // const history = useHistory()
  // const gitPath=(id)=>{
  //     history.push(`/Card/${id}`);
    
  // } 
  const getPo =async ()=>{
    const response = await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
    console.log(response.data.data);
    setArr(response.data.data)
  }
   



  return (
    <div >
   <form>
            <input  type="text"  name="search" placeholder="Search... "/>
            <button>Search</button>
        </form>
        <div className="cards">
      {arr.map((elem,i) => (
        <div key={elem.id} className="card" >
          <img src={elem.images.large} alt={`card ${elem.name}`}/> 
          {/* onClick={()=>{gitPath(elem.id)}} */}
          <h2> {elem.name}  </h2>
          
          
        </div>
      ))}
      </div>
    </div>
  );
};
export default Cards;
