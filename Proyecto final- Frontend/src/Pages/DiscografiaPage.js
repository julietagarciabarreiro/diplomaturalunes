import React from "react";
import './DiscografiaPage.css';
import Header from "../Components/Layout/Header";
import Nav from "../Components/Layout/Nav";

const DiscografiaPage = (props) => {
    return (
        <>
        <Header fondo="header-background.jpg">
            <h1>Discografía</h1>
        </Header>
        <Nav/>
        <section className="holder">
            <div className="galeria">
                <div className="foto">
                    <a href="https://open.spotify.com/track/2yNcPOQHUU5eMIqT6epGrJ?si=f8890f3cf10149d4">
                        <img src="cuentodeterror.jpg" width="75" alt="cuentodeterror" />
                        <h1 className="h1b"> CUENTO DE TERROR</h1>
                    </a>
                </div>
                <div className="foto">
                    <a href="https://open.spotify.com/track/5AYnQdFgseN5SAR2AdD65Q?si=dd67a15f73514b4c">
                        <img src="podriamos.jpeg" width="75" alt="podriamos" />
                        <h1 className="h1b">PODRÍAMOS</h1>
                    </a>
                </div>
                <div className="foto">
                    <a href="https://open.spotify.com/album/2YERTzKySYWSSWYwzqFFH6?si=S0_ZrGarRcCi484E_eEI2g">
                        <img src="predecir.png" width="75" alt="predecir" />
                        <h1 className="h1b">PREDECIR</h1>
                    </a>
                </div>
                <div className="foto">
                    <a href="https://open.spotify.com/album/1nGih5SPP2gbXz541ivm1W?si=oYeFkFWARUedQTZoGDlltA">
                        <img src="ahora.jpeg" width="75" alt="ahora" />
                        <h1 className="h1a">AHORA</h1>
                    </a>
                </div>
            </div>
        </section>
        </>
    );
}
export default DiscografiaPage;