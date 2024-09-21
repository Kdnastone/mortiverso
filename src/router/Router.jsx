import { useState } from "react";
import Team from "../pages/Team";
import Character from "../pages/Characters";
import New from "../pages/New";

const Router = () => {
    const [route, setRoute] = useState("team");

    switch (route) {
        case "team":
            return <Team setRoute={setRoute} />;

        case "character":
            return <Character setRoute={setRoute} />;

        case "new":
            return <New setRoute={setRoute} />;

        default:
            break;
    }
};

export default Router;