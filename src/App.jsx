import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import AsideNav from "./components/Navigation/AsideNav";
import Notifications from "./components/Notifications/Notifications";
import Jobs from "./components/Jobs/Jobs"
import Messaging from "./components/Messaging/Messaging";
import Connections from "./components/Connections/Connections";
import Companies from "./components/Companies/Companies";
import Settings from "./components/Single/Settings";
import Help from "./components/Single/Help";

function App() {
    return (
        <div className="font-['Inter'] bg-[#0E0E10] text-lightWhite h-screen overflow-hidden">
            <NavBar />
            <div className="flex">
                <AsideNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/messaging" element={<Messaging />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/connections" element={<Connections />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/Help" element={<Help />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
