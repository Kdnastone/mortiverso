import Layout from "../components/basics/Layout";
import PropTypes from "prop-types";

const New = ({ setRoute }) => {
    return (
        <Layout setRoute={setRoute}>
            <div>
                <h1>Agregar Nuevo Personaje</h1>

            </div>
        </Layout>
    );
};

New.propTypes = {
    setRoute: PropTypes.func,
};

export default New;
