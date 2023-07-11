import React from "react";
import styles from './film.module.css'
import FilmTable from "./FilmTable";

function Film(){
    return (
        <>
         <h1>Filmovi</h1>
         <FilmTable />
        </>
    );
}

export default Film;