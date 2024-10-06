import { Link, Route, Routes } from "react-router-dom";
import Allpc from "./allpc";
export default function App(){
    return(<>
        <Routes>
            <Route path="/Allpc" element={<Allpc />}/>
        </Routes>
    </>)
}