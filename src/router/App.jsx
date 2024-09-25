import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "../pages/Team";
import New from "../pages/New";
import Characters from "../pages/Characters";
import NotFound from "../components/functionals/NotFound";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
             <Route path="/" element={<Team></Team>}></Route>
             <Route path="/new" element={<New></New>}></Route>
             <Route path="/characters" element={<Characters></Characters>}></Route>
             <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
