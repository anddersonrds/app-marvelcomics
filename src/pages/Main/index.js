import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api";

import "./styles.css";

export default function Main() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    async function loadComics(){
      const response = await api.get(`comics?limit=10&apikey=b669f7bfecd68cb011fa4aa052cd4fa1`);
      const { results } = response.data.data;

      setComics(results);
    }

    loadComics();
  }, []);

  return (
    <div className="comic-list">
      <ul>
        {comics.map(comic => (
          <Link to={`/comic/${comic.id}`} key={comic.id}>
            <li className="comic">

            <div className="thumbnail">
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt=""/>
            </div>

            <div className="comic-infos">
              <h1>{comic.id}</h1>
              <h1>{comic.title}</h1>
              <p>{comic.description}</p>
              <p><span>Format: </span>{comic.format}</p>
            </div>

            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
