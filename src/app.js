/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  console.log("fish fish fish, javascript is working ");
  document.querySelector("#the-excuse").innerHTML = generateRandomExcuse();
};

let generateRandomExcuse = () => {
  let quien = ["Mi perro", "Mi abuela", "Mi gato", "Mi tortuga"];
  let accion = ["se comio", "robo", "rompio"];
  let que = ["el informe", "las llaves", "la tarea"];
  let cuando = [
    "en la casa",
    "saliendo del trabajo",
    "durante la clase",
    "en casa de un amigo",
    "Jugando anoche"
  ];

  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}`;
};
