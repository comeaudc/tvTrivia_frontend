import style from "./Game.module.css";
import CategoryChoice from "../../components/GameComponents/CategoryChoice";
import { useUser } from "../../context/userContext/userContext";
import { useState, useEffect } from "react";
import axios from "axios";

export default function GamePage() {
  const { category } = useUser();
  const [genre, setGenre] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [playing, setPlaying] = useState(null);

  useEffect(() => {
    if (genre) {
      async function getQuestions() {
        try {
          let res = await axios.get(
            `http://localhost:3000/api/question/category/${genre}`
          );

          setQuestions(res.data);
        } catch (err) {
          console.error(err);
        }
      }
      getQuestions();
    }
  }, [genre]);

  function handleStartGame (){
    setPlaying(true)
  }

  function loaded() {
    return (
      <div className={style.container}>
       {!playing? <CategoryChoice setGenre={setGenre} category={category} /> : <h1>You are playing</h1>}
        {questions && !playing && <button className={style.startBtn} onClick={handleStartGame}><h3>Ready to start?</h3></button>}
      </div>
    );
  }

  function loading() {
    return <h1>Loading...</h1>;
  }

  return category ? loaded() : loading();
}
