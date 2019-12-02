import React, { useEffect, useState } from 'react';
import api from "../../services/api";

import './styles.css';

export default function Comic({ match }) {
  const [comic, setComic] = useState({});

  useEffect(() => {
    async function loadComics(){
      const comicID = match.params.id;
      const response = await api.get(`comics/${comicID}?apikey=b669f7bfecd68cb011fa4aa052cd4fa1`);

      const currentComic = response.data.data.results[0];
      setComic(currentComic);
    }

    loadComics();
  }, [match.params.id]);

  console.log(comic);

  return (
    <div className='container'>
      <div>
        <img src='' alt=""/>
      </div>
      <div>
        <p>Title: {comic.title}</p>
        <p>Description: {comic.description}</p>
        <p>Format: {comic.format}</p>
        <p>Price: {comic.price}</p>
      </div>
    </div>
  );
}
