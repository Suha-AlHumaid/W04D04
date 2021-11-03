import React from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router";
import "./style.css";

const Search = () => {
  const [searchArr] = useState([
    {
      id: "0",
      name: "Heart",
      img: "./heart.jpg",
      disc: "Heart Card",
    },
    {
      id: "1",
      name: "Club",
      img: "./club.png",
      disc: "Club Card",
    },
    {
      id: "2",
      name: "Spade",
      img: "./spade.png",
      disc: "Spade Card",
    },
    {
      id: "3",
      name: "Diamond",
      img: "./diamond.png",
      disc: "Diamond Card",
    },
  ]);
  let name = useParams().name.toLowerCase();
//   name.toLowerCase()
  const result = searchArr.filter((elem) => (elem.name.toLowerCase().includes(name)))
//   (name === elem.name.toLowerCase())); 
 
  const history = useHistory();

  const gitPath = (id) => {
    history.push(`/Card/${id}`);
  };
  return (
    <div>
      <h1>Search Section</h1>

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
export default Search;
