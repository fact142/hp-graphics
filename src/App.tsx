import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./components/Form";
import {getCharacter} from "./api/HarryPotter";
import {Period} from "./components/Form/interfaces";
import {Character} from "./api/interfaces";
import {GraphsValue, useApp} from "./useApp";
import {Pie, PieChart, Tooltip} from "recharts";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState("");
  const [currentPeriod, setCurrentPeriod] = useState<Period>({start: "", end: ""});
  const [currentCharacters, setCurrentCharacters] = useState<GraphsValue[]>([]);
  const {filterCharacterByDateOfBirth} = useApp();

  useEffect(() => {
    setCurrentCharacters(filterCharacterByDateOfBirth(currentPeriod, characters))
  },  [currentPeriod]);

  useEffect(() => {
    getCharacter()
      .then((result) => setCharacters(result.data))
      .catch((error) => setError(error))
  }, []);

  return (
    <div>
      <Form setCurrentPeriod={setCurrentPeriod}/>
      <PieChart width={400} height={400}>
        <Pie
          data={currentCharacters}
          labelLine={false}
          fill="#8884d8"
          dataKey="value"
          label
        >
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}

export default App;
