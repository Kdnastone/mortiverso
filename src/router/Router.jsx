import { useState } from "react";
import New from "../pages/New";
import Characters from "../pages/Characters";
import Team from "../pages/Team";

const Router = () => {
    const [route, setRoute] = useState("team");

    switch (route) {
        case "team":
            return <Team setRoute={setRoute} />;

        case "characters":
            return <Characters setRoute={setRoute} />;

        case "new":
            return <New setRoute={setRoute} />;

        default:
            break;
    }
};

export default Router;