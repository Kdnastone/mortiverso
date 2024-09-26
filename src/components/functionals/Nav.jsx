import ItemNav from "../basics/ItemNav"

import './nav.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <ItemNav route="/" text="Equipo" />
                <ItemNav route="/characters" text="Personajes"></ItemNav>
                <ItemNav route="/new" text="Agregar" />
            </ul>
        </nav>
    );
};

export default Nav;