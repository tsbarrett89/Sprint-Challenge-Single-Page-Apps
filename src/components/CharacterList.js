import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

const CharCard = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [query, setQuery] = useState("");


  useEffect(() => {
    props.setFilteredData(props.data.filter(character=>{
      return character.name.toLowerCase().includes(query.toLowerCase());
    }))
  }, [query]);
console.log(props.data)
  return (
    <section className="character-list">
      <SearchForm setQuery={setQuery} />
      <div>
      {props.filteredData.map((character)=>(
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image} />
        </div>
      ))}
      </div>
    </section>
  );
}