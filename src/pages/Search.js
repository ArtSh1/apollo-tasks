import React from "react";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import "./Search.css";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log({
    called,
    loading,
    error,
    data,
  });

  return (
    <div className="search">
      <input
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={() => getLocations()}>
        Search
      </button>
      {loading && <div>spiner...</div>}
      {error && <div>Something when wronggg...</div>}
      {data && (
        <ul className="list">
          {data.characters.results.map((character) => {
            return <li>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
