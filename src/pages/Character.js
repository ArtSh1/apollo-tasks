import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();

  const { data, loading, error } = useCharacter(id);

  console.log({
    error,
    loading,
    data,
  });

  if (error) return <div className="error">Something is Wrong</div>;

  if (loading) return <div className="loading">LOADING...</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
