import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
// import axios from "axios";
import { UniversalContext } from "../Context";

  const SubGallery = () => {
      const [image, setImage] = useState(null);
      const [images] = useContext(UniversalContext)
      const { id } = useParams();
      const GetSingleImage = async () => {
        // const { data } = await axios.get(`https://picsum.photos/id/${id}/Gallery`);
        // setImage(data);
        setImage(images.filter((image) => image.id === id)[0]);
      }
     
      useEffect(() => {
        GetSingleImage();
    }, [])
      
  return (
        <div className="container mt-5 m-auto" >
          <img height="500" src={image && image.download_url} alt="" />
          <h3>{image && image.author}</h3>
          <a target="_blank" href={image && image.url}>
             Open in Browser</a> {" "}
           <br /> <br />
           <Link className="btn btn-info" to="/">Home</Link>
        </div>
     );  
  };
  
  export default SubGallery;