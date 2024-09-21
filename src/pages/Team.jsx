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
