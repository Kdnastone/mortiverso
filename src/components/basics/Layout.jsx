import PropTypes from "prop-types";
import Header from "../functionals/Header";

const Layout = ({ children, setRoute }) => {
    return (
        <>
            <Header setRoute={setRoute} />
            {children}
        </>
    );
};

Layout.propTypes = {
    setRoute: PropTypes.func,
    children: PropTypes.node,
};

export default Layout;
