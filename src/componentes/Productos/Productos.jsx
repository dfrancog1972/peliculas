import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import Menu from "../menu/Menu"
// import ProductosPelis from "./Productos.json";

export default function productos() {
  const [productos, setProductos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   // fetch(
  //   //   "https://analityc.gestionavisos.com.mx/api/queries/136/results?" +
  //   //     new URLSearchParams({
  //   //       api_key: "wWcNFv0l4aLvYGY2q90wSkoHZyaFpOTNP5E4Htv9",
  //   //     }),
  //   //   { method: "POST", body: { parameters: { max_age: 180 } } }
  //   // )
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setProductos(data);
  //   //     //console.log(data.query_result.data.rows)
  //   //     setIsLoading(false);
  //   //   });
  // }, []);

  // if (isLoading) {
  //   <h1>Cargando.....</h1>;
  // } else {
  //   return (
  //     <>
  //       <section className="peliculas">
  //         {productos.query_result.data.rows.map((item, index) => {
  //           return <Card item={item} key={index} />;
  //         })}
  //         {productos.query_result.data.rows.map((item) => {
  //           return <Menu item={item}/>;
  //         })}
        
  //       </section>
  //     </>
  //   );
  // }
  <h1>Hola</h1>
}
