import { Routes, Route} from "react-router-dom";
import UserInfo from "./UserInfo";
import Home from "./Home";

const Routing = () => {

return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<UserInfo />} />
        </Routes>
}
export default Routing;