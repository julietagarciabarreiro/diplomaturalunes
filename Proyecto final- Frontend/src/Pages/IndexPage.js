import React from "react";
import './IndexPage.css';
import Nav from "../Components/Layout/Nav";
import Header from "../Components/Layout/Header";



const IndexPage = (props) => {
    return (
        <>
            <Header fondo="header-background.jpg">
                <h1>IRYS</h1>
            </Header>
            <Nav />
            <img src="irys.jpeg" width="100" alt="irysfoto" /><main className="holder">
                <div className="columnas">
                    <div className="bienvenidos">
                        <h2>¡BIENVENIDO!</h2>
                        <p>Te encontrás en la página oficial de la artista argentina IRYS.
                            La misma fue creada para conocer a fondo su trayectoria, su historia y los futuros proyectos en los que se ve sumergida.
                        </p>
                    </div>

                </div>
            </main>
        </>
    );
}
export default IndexPage;