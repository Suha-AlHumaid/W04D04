import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import "./style.css";

const  Favorite = () => {

  const [arr] = useState([
    {
      id: "0",
      name: "Heart",
      img: "./heart.jpg",
      disc: "Heart Card",
      isLike: false,
    },
    {
      id: "1",
      name: "Club",
      img: "./club.png",
      disc: "Club Card",
      isLike: true,
    },
    {
      id: "2",
      name: "Spade",
      img: "./spade.png",
      disc: "Spade Card",
      isLike: false,
    },
    {
      id: "3",
      name: "Diamond",
      img: "./diamond.png",
      disc: "Diamond Card",
      isLike: false,
    },
  ]);
  
  const history = useHistory();

  const gitPath = (id) => {
    history.push(`/Card/${id}`);
  };
  const result = arr.filter((elem) => (elem.isLike === true));
  return (
    <div>
      <h1>Favorite Section</h1>

      {result.map((elem) => (
        <div
          key={elem.id}
          onClick={() => {
            gitPath(elem.id);
          }}
        >
          <img src={require(`${elem.img}`).default} alt={`card ${elem.name}`} />
          <h2> {elem.name} </h2>
        </div>
      ))}
    </div>
  );
};
export default Favorite;
