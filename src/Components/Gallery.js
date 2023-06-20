import React from 'react';
import {useState} from 'react';
import Card from './Card';
import dataApi from "./dataApi";

const Gallery = () => {
    const [cardData, setcardData] = useState(dataApi);

    const filterImage = (category) =>{
      const updatedList = dataApi.filter((curElem)=>{
        return curElem.category === category;
      });

      setcardData(updatedList);
    }
  return (
    <>
      <div className="navBar">
        <nav className="multi-button">
          <button onClick={() => setcardData(dataApi)}>All images</button>
          <button onClick={() => filterImage("si-fi")}>Si-Fi</button>
          <button onClick={() => filterImage("human")}>Human</button>
        </nav>
      </div>
      <Card cardData={cardData}/>
    </>
  )
}

export default Gallery
