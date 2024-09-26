import Layout from '../components/functionals/Layout'
import PropTypes from "prop-types";
import TeamInfo from "../components/info/TeamInfo";

const Team = ({ setRoute }) => {
  return (
    <Layout setRoute={setRoute}>
      <div>
        <h1>Equipo</h1>
        <section>
          <h2>Nuestra Historia</h2>
          <p>
            Somos mujeres estudiantes del programa 'Análisis y Desarrollo de Software' en el Servicio Nacional de Aprendizaje (SENA), 
            y hemos aplicado a la convocatoria 'MUJERES DIGITALES SENA 2024', desarrollada en colaboración con la Cámara Colombo-Alemana 
            | AHK Colombia y KeyCode Latam. Nuestro objetivo es aprender y aplicar los conocimientos adquiridos en el programa y en la 
            convocatoria para desarrollar proyectos innovadores que contribuyan al crecimiento de la industria de la tecnología en Colombia.
          </p>
        </section>
        <div className="team-cards">
          {TeamInfo.map((miembro, index) => (
            <div className="card" key={index}>
              <img src={miembro.image} alt={miembro.nombre} />
              <h2>{miembro.nombre}</h2>
              <p>
                GitHub: <a href={miembro.github}>{miembro.github}</a>
              </p>
              <p>
                LinkedIn: <a href={miembro.linkedin}>{miembro.linkedin}</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

Team.propTypes = {
  setRoute: PropTypes.func,
};

export default Team;
