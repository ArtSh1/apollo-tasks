import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersList() {
  const { error, loading, data } = useCharacters();

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">Something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} className="images" />
            <h2 className="name">{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
