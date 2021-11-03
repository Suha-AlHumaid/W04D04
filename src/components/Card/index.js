import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./style.css";

const Card = () => {

  const [arr, setArr]= useState([]);

  useEffect ( ()=>{ getPo()},[]);
   

    const getPo =async ()=>{
      const response = await axios.get("https://api.pokemontcg.io/v2/cards?pageSize=10");
      console.log(response.data.data);
      setArr(response.data.data)
    }
     
  const id = useParams().id;


  const cardElem= arr.find(elem => (
    (Number(elem.id) === Number(id))
  ))
  console.log(cardElem);



  return (
    <div>  
      {/* <img src={cardElem.images.large}/>
      <h2> {cardElem.name} </h2>
      <p>{cardElem.disc}</p> */}
    </div>
  );
};

export default Card;
