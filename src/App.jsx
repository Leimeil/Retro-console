import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/screen';
import useFetch from './hooks/useFetch';
import GameScreen from './components/GameScreen';
import StatWindow from './components/StatWindow';
import ResultScreen from './components/ResultScreen';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
  const { data, loading, error } = useFetch(url);
  
  const [pokemones, setPokemones] = useState([]);
  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }
  
  const getListPokemones = () => {
    const list = data?.results?.filter((p) => p.url);
    const plist = list?.map((l) => fetch(l.url).then((res) => res.json()));

    Promise.all(plist).then((values) => {
      const saniData = values?.map((e) => {
        return {
          name: e.name,
          id: e.id,
          types: e.types,
          moves: e.moves.map((e) => {
            return {
              ...e,
              attack: getRandomInt(20, 98),
            };
          }),
          sprites: e.sprites,
        };
      });

      setPokemones(saniData);
    });
  };

  useEffect(() => {
    getListPokemones();
  }, [data]);


  const [position, setPosition] = useState(1);

  const [myPokeSelection, setMyPokeSelection] = useState([])
  const [pcPokeSelection, setPcPokeSelection] = useState([])

  const handleDirection = (direction) => {
    console.log({direction})
    if (direction === 'right') {
    setPosition((prev) => (prev + 1 > 100 ? 100 : prev + 1));

  } else if (direction === 'left') {
    setPosition((prev) => (prev - 1 <= 0 ? 1 : prev - 1));

  } else if (direction === 'up') {
    setPosition((prev) => (prev - 4 <= 0 ? 1 : prev - 4));

  } else if (direction === 'down') {
    setPosition((prev) => (prev + 4 > 100 ? 100 : prev + 4));
  }
  }


  const computerSelection = () => {
    const rng = getRandomInt(1,100)
    const pc = pokemones.filter((p) => p.id === rng)
    setPcPokeSelection(pc)
  }

  const handleSelection = () => {
    const selectPokemon = pokemones.filter((p) => p.id === position)
    setMyPokeSelection(selectPokemon)
    computerSelection()
  }

  const [result, setResult] = useState(null)

  return (
    <div className="flex justify-center pt-10">
      <LeftControl handleDirection={handleDirection}/>
      {result ? (
      <ResultScreen result={result} />
      ) : myPokeSelection.length && pcPokeSelection.length ? (
      <GameScreen 
      myPokeSelection={myPokeSelection} 
      pcPokeSelection={pcPokeSelection}
      setResult={setResult}
    />
      ) : (
        <Screen pokemones={pokemones} position={position}/>
      )}
      <RightControl handleSelection={handleSelection}/>
      {myPokeSelection.length >=1 ? (<div></div>) : (
      <StatWindow pokemones={pokemones} position={position}/>
      )}
    </div>
  );
}

export default App