import React, { useState } from "react";
import './RedesycontactosPage.css';
import Header from "../Components/Layout/Header";
import Nav from "../Components/Layout/Nav";
import axios from "axios";

const RedesycontactosPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);
        
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);

        setSending(false);
        setMsg(response.data.message);

        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <>
            <Header fondo="header-background.jpg">
                <h1>Redes y Contacto</h1>
            </Header>
            <Nav />
            <main className="holder">
                <div className="columna left">
                    <h2>Contacto</h2>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <p>
                            <label>Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </p>
                        <p>
                            <label>Mensaje</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <p className="acciones"> <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
                <div className="columna right">
                    <ul>
                        <li><a className="spotify" href="https://open.spotify.com/artist/1BVW1V3EuRkOvZn0C4tf2n?si=XFNWAswZTfS9dxvdkP3u9w"><i className="fa fa-spotify icono1"></i></a></li>
                        <li><a className="youtube" href="https://www.youtube.com/channel/UC0DtWeowjNdV9l-Z7J2j1yA"><i className="fa fa-youtube icono2"></i></a></li>
                        <li><a className="instagram" href="https://www.instagram.com/irys.j/"><i className="fa fa-instagram icono3"></i></a></li>
                    </ul>
                </div>
            </main>

        </>
    );
}
export default RedesycontactosPage;