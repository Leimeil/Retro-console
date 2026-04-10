import { useEffect, useState } from 'react';
import './App.css';
import LeftControl from './components/LeftControl';
import RightControl from './components/RightControl';
import Screen from './components/Screen';
import useFetch from './hooks/useFetch';
import GameScreen from './components/GameScreen';

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
      console.log('promesa values', values);
      setPokemones(values);
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
    if (direction === 'right'){
      if (prev+1 > 100){
        setPosition(100)
      }else{
      setPosition((prev) => prev+1);
      }
    }else if (direction === 'left'){
      if (prev-1 <= 0 ){
        setPosition(1)
      }else{
        setPosition((prev) => prev-1)
      } 
    } else if(direction === 'up'){
      if (prev-4 <= 0 ){
        setPosition(1)
      }else{
        setPosition((prev) => prev-4)
      } 
    }else if (direction === "down"){
      if (prev+4 > 100){
        setPosition(100)
      }else{
      setPosition((prev) => prev+4)
      }
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

  return (
    <div className="flex justify-center pt-10">
      <LeftControl handleDirection={handleDirection}/>
      {myPokeSelection.length && pcPokeSelection.length ? (
        <GameScreen myPokeSelection={myPokeSelection} pcPokeSelection={pcPokeSelection}/>
      ) : (
        <Screen pokemones={pokemones} position={position}/>
      )}
      <RightControl handleSelection={handleSelection}/>
    </div>
  );
}

export default App;