import React from "react";
import './BiografiaPage.css';
import Header from "../Components/Layout/Header";
import Nav from "../Components/Layout/Nav";

const BiografiaPage = (props) => {
    return (
        <>
        <Header fondo="header-background.jpg">
            <h1>Biografía</h1>
        </Header>
        <Nav/>
            <section className="holder">
                <div className="Biografía">
                    <p>Julieta García Barreiro (Buenos Aires, 23 de Marzo de 1995), también conocida como IRYS, es una cantante y compositora Argentina.
                        Oriunda de Pilar, comenzó su carrera artística a los 14 años, estudiando canto en un conservatorio de dicha ciudad.
                        Cuando cumplió la mayoría de edad, se mudó a Buenos Aires, para profesionalizarse en la materia. Estudió con la reconocida cantante lírica Susana Naidich y luego optó por adquirir nuevos conocimientos musicales en la EMBA (Escuela de Musica de Buenos Aires).
                    </p>
                    <p>El proyecto IRYS nació en 2019, el mismo año que debutó con su primer album solista: "Ahora".
                        Este primer material incluye 6 canciones, escritas y compuestas por Julieta.
                        Luego, tras quedar encerrada gracias a la pandemia en Marzo del 2020, ella se sintió inspirada en componer y seguir creando canciones. Es así que nacieron los singles "Predecir" y "Podríamos"
                        Actualmente se aproxima el lanzamiento del próximo single "Cuento de terror", que saldrá a la luz el 4 de febrero del 2022.
                    </p>
                </div>
            </section>
        </>
       
    );
}
export default BiografiaPage;