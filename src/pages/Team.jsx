<<<<<<< HEAD
import React from 'react'
import Layout from '../components/functionals/Layout'
import PropTypes from 'prop-types'

function Team() {
  return (
    <Layout>
        <div>Team</div>
    </Layout>
  )
}

Team.propTypes = {}

export default Team
=======
import Layout from "../components/basics/Layout";
import PropTypes from "prop-types";

const Team = ({ setRoute }) => {
    return (
        <Layout setRoute={setRoute}>
            <div>
                <h1>Equipo</h1>
                
                <section>
                 <p>
                 </p>
                </section>
            </div>
        </Layout>
    );
};

Team.propTypes = {
    setRoute: PropTypes.func,
};

export default Team;
>>>>>>> development
