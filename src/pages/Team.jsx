import Layout from '../components/functionals/Layout';
import PropTypes from 'prop-types';
import TeamInfo from '../components/info/TeamInfo';
import './team.css';

const Team = ({ setRoute }) => {

  return (
    <Layout setRoute={setRoute}>
      <div className="team">
        <h1>Equipo</h1>
        <section>
          <h2>Nuestra Historia</h2>
          <h3>
            Somos mujeres estudiantes del programa {' '} 
            <a 
              href="https://www.youtube.com/watch?v=ddiy0azeS5g" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              'Análisis y Desarrollo de Software'
            </a> 
            {' '} en el Servicio Nacional de Aprendizaje (SENA), y hemos aplicado a la convocatoria 'MUJERES DIGITALES SENA 2024', desarrollada en colaboración con la Cámara Colombo-Alemana | AHK Colombia y {' '} 
            <a 
              href="https://www.keycode.com.co" 
              target="_blank" 
              rel="noopener noreferrer"
            >
               KeyCode Latam
            </a>. Nuestro objetivo es aprender y aplicar los conocimientos adquiridos en el programa y en la convocatoria para desarrollar proyectos innovadores que contribuyan al crecimiento de la industria de la tecnología en Colombia.
          </h3>
        </section>
        <div className="team-cards">
          {TeamInfo.map((miembro, index) => (
            <div className="card" key={index}>
              <img src={miembro.image} alt={miembro.nombre} />
              <h2>{miembro.nombre}</h2>
              <p>
                <a href={miembro.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </p>
              <p>
                <a href={miembro.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
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
