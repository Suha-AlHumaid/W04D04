import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./style.css";

const Card = () => {
  const id = useParams().id;
  
  const [arr] = useState([
    {
      id: 0,
      name: "Heart",
      img: "./heart.jpg",
      disc: "Heart Card",
    },
    {
      id: 1,
      name: "Club",
      img: "./club.png",
      disc: "Club Card",
    },
    {
      id: 2,
      name: "Spade",
      img: "./spade.png",
      disc: "Spade Card",
    },
    {
      id: 3,
      name: "Diamond",
      img: "./diamond.png",
      disc: "Diamond Card",
    },
  ]);

  const cardElem= arr.find(elem => (
    (Number(elem.id) === Number(id))
  ))



  return (
    <div>  
      <img src={require(`${cardElem.img}`).default} alt={`card ${cardElem.name}`} />
      <h2> {cardElem.name} </h2>
      <p>{cardElem.disc}</p>
    </div>
  );
};

export default Card;
