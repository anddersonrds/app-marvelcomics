import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api";

import "./styles.scss";

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
              <span className="comicId">#{comic.id}</span>
              <h2><strong>{comic.title}</strong></h2>
              <p className="comicDescription block-with-text">{comic.description}</p>
              <p><strong>Format:</strong> {comic.format}</p>
            </div>

            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
