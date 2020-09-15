import React, { useState } from "react";
import { baseurl } from "./constants";

const Character = ({ name }) => {
  // const [charDescription, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  const handler = () => {
    fetch(`${baseurl}`)
      .then(res => res.json())
      .then((characterResponse) => {
        console.log(characterResponse);
      //   const { description, imageUrl } = characterResponse[0];
      //   let charDescription = description[0].description;
      //   let image = imageUrl[0].name;
      //   console.log(charDescription, image);
      //   setDescription(description);
      //   setImageUrl(image);
      
  })
}
  return (
    <div
      onClick={handler}
      style={{
        fontSize: "16px",
        padding: "8px",
        border: "2px solid black",
        marginBottom: "12px",
      }}
    >
      {name}
      {/* {charDescription && (
        <div>
          <p>Descripion: {charDescription}</p>
          <p>ImageUrl: {imageUrl}</p>
        </div> */}
      
    </div>
  )}
export default Character