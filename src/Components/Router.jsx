import { BrowserRouter,Routes,Route} from "react-router-dom";
import Error from "./Error";
import Home from "./Home";

function RouterComponent() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/*" element={<Error/>} />
            </Routes>
    </BrowserRouter> );
}

export default RouterComponent;