import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { CookieContext } from "../App";

import { UniversalContext } from "../Context";


const Gallery = () => {
    const [images, setImages] = useContext(UniversalContext);
    // const coo = useContext(CookieContext);
    // console.log(coo)
    
    const GetImages = async () => {
        const { data } = await axios.get("https://picsum.photos/v2/list");
        setImages(data);
    }
    useEffect(() => {
       GetImages();
    
    }, []);
    
    let imagesList = <p>No Images...</p>;
    if (images) {
        imagesList = images.map((image) =>  (
            <div key={image.id} className="w-25">
               <img height="200" src={image.download_url} alt="" />
               <Link to={`/gallery/${image.id}`}>{image.author}</Link>
            </div>
        ));
    }

  return (
      <div className="container mt-5">
          <h3>Images</h3>
          <div className="w-100 d-flex flex-wrap">{imagesList}</div>
      </div>
      
      );
  };


export default Gallery;