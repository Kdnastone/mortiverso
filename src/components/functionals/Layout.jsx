import PropTypes from "prop-types"
import Nav from "./Nav"

import '../../styles/global.css'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;