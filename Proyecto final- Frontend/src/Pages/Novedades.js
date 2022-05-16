import React, { useEffect, useState } from "react";
import './Novedades.css';
import Header from "../Components/Layout/Header";
import Nav from "../Components/Layout/Nav";
import axios from "axios";
import NovedadItem from "../Components/novedades/NovedadItem";

const NovedadesPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
            setNovedades(response.data);

            setLoading(false);
        };

        cargarNovedades();
    }, [])

    return (
        <>
            <Header fondo="header-background.jpg">
                <h1>Novedades</h1>
            </Header>
            <Nav />
            <section className="holder">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(novedad => <NovedadItem key={novedad.id}
                        title={novedad.titulo} subtitle={novedad.subtitulo}
                        imagen={novedad.imagen} body={novedad.cuerpo} />)
                )}

            </section>
        </>
    );
}
export default NovedadesPage;