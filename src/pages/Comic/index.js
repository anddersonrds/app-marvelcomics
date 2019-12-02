import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from "../../services/api";

import './styles.scss';

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
    <div className="comic-list">
      <div className="comic">
        <div className="current-thumbnail">
          {comic.images && (
            comic.images.map((img, index) =>
              <img key={index} src={`${img.path}.${img.extension}`} alt="teste"/>
            ))
          }
        </div>

        <div className="current-infos">
          <h1 className="comicId"><strong>ID:</strong> #{comic.id}</h1>
          <h2><strong>Title: </strong>{comic.title}</h2>
          <p className="comicDescription  block-with-text"><strong>Description:</strong> {comic.description}</p>
          <p><strong>Date Modified:</strong> {comic.modified}</p>
          <p><strong>Pages:</strong> {comic.pageCount}</p>
          <p><strong>Price:</strong> {comic.prices && (comic.prices.map(c => `$${c.price}`))}</p>
          <p><strong>Issues:</strong> {comic.issueNumber}</p>
          <p><strong>Creators:</strong> {comic.creators && (comic.creators.items.map(creator => `${creator.name}, `))}</p>
          <p><strong>Format:</strong> {comic.format}</p>
          <div className="btn">
            <Link to='/'>
              <li>Back</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
