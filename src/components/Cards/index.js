import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import {AiOutlineLike} from "react-icons/ai"
import "./style.css";


const Cards = () => {
  const [arr,setArr] = useState([
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
  localStorage.setItem("arr", JSON.stringify(arr));
 
  const history = useHistory()

  const gitPath=(id)=>{
      history.push(`/Card/${id}`);
    
  } 
  const searchPath=(e)=>{
    //   console.log(e.target.search.value);
    history.push(`/Search/${e.target.search.value}`);
  }

const likeFunc=(e,i)=>{
 
//  elem.isLike = !elem.isLike
 
    console.log('index: ' + i);
    console.log(arr[i].isLike);
    let newArr = [...arr]; // copying the old datas array
    newArr[i].isLike = !arr[i].isLike; // replace e.target.value with whatever you want to change it to
  
    setArr(newArr);
    
   
  }


  

  return (
    <div >
   <form onSubmit={searchPath}>
            <input  type="text"  name="search" placeholder="Search... "/>
            <button>Search</button>
        </form>
        <div className="cards">
      {arr.map((elem,i) => (
        <div key={elem.id} className="card" >
          <img src={require(`${elem.img}`).default} alt={`card ${elem.name}`}   onClick={()=>{gitPath(elem.id)}}/>
          <h2> {elem.name}  </h2>
    
          <AiOutlineLike id="icon"  onClick={(e)=>{likeFunc(e,i)}} className={elem.isLike ? `like` : `unlike`}/>
          
          
        </div>
      ))}
      </div>
    </div>
  );
};
export default Cards;
