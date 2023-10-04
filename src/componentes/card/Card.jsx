/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Card.css";
import {FaHandSpock, FaHandPointDown} from "react-icons/fa";

export default function Card(props) {
  const [counter, setCounter] = useState(0);
  let handlerCounter = () => {
    setCounter(counter + 1);
  };

  var [like, setLike] = useState(false);

  let handlerLike = () => {
    setLike(!like)
  }

  return (
    <>
      <div className="estilo-card">
        <h3>Titulo:{props.item.titulo} </h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {/* <img src={props.item.portada} /> */}
            </div>
            <div className="col text-end" onClick={handlerLike}>
              {like ? <FaHandSpock></FaHandSpock> : <FaHandPointDown></FaHandPointDown>}      
            </div>
          </div>      
        <p>Genero:{props.item.genero} </p>
        <p>Duracion:{props.item.duracion} </p>
        <p>Director:{props.item.director} </p>
        <p>Sinopsis: {props.item.sinopsis} </p>
        <p>Calificación: {props.item.calificacion} </p>
        <p>Actores: {props.item.actores} </p>
        <h4>contador : {counter}</h4>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlerCounter}
        >
          Califica
        </button>
        </div>       
      </div>
    </>
  );
}
