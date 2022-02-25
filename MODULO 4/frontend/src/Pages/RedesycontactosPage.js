import React from "react";
import './RedesycontactosPage.css';

const RedesycontactosPage = (props) => {
    return (
        <main className="holder">
            <div className="columna left">
         <h2>Contacto</h2>
         <form action="" method="" className="formulario">
             <p>
                 <label>Nombre</label>
                 <input type="text" name="nombre"/>
             </p>
             <p>
                 <label>Email</label>
                 <input type="text" name="email"/>
             </p>
             <p>
                 <label>Teléfono</label>
                 <input type="text" name="telefono"/>
             </p>
             <p>
                 <label>Mensaje</label>
                 <textarea name="mensaje"></textarea>
             </p>
             <p className="acciones"> <input type="submit" value="Enviar"/>
            </p>
         </form>
     </div>
     <div className="columna right">
        <ul>
          <li><a className="spotify" href="https://open.spotify.com/artist/1BVW1V3EuRkOvZn0C4tf2n?si=XFNWAswZTfS9dxvdkP3u9w"><i className="fa fa-spotify icono1"></i></a></li>
          <li><a className="youtube"  href="https://www.youtube.com/channel/UC0DtWeowjNdV9l-Z7J2j1yA"><i className="fa fa-youtube icono2"></i></a></li>
          <li><a className="instagram"  href="https://www.instagram.com/irys.j/"><i className="fa fa-instagram icono3"></i></a></li>
        </ul>
      </div>
    </main>
    
    );
}
export default RedesycontactosPage;