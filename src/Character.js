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
        // const { description, imageUrl } = characterResponse[0];
        // let charDescription = description.description;
        // let image = imageUrl.name;
        // console.log(charDescription, image);
        // setDescription(description);
        // setImageUrl(image);
      
  })
}
  return (
    <div className="characterBox" onClick={handler} >
      {name}
    </div>
  )}
export default Character