import PropTypes from "prop-types";
import Button from "../basics/Button";

const Header = ({ setRoute }) => {
    const routes = ["team", "characters", "new"];

    return (
        <header>
            <nav>
                {routes.map((route, index) => {
                    return <Button key={index} text={route} setRoute={setRoute} />;
                })}
            </nav>
        </header>
    );
};

Header.propTypes = {
    setRoute: PropTypes.func,
};

export default Header;
