import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./card.css";
import CarDetailScreen from "./components/CarDetailScreen";
import Homescreen from "./components/Homescreen";
import MyBooking from "./components/MyBooking";
import NotFound from "./components/NotFound";
import SignOut from "./components/SignOut";
import SuitabilityTool from "./components/SuitabilityTool";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Homescreen />} />
        <Route path="/electric_cars/" element={<Homescreen />} />

        <Route path="/electric_cars/:id" element={<CarDetailScreen />} />
        <Route path="/suitability_tool/" element={<SuitabilityTool />} />
        <Route path="/my_booking/" element={<MyBooking />} />
        <Route path="/logout/" element={<SignOut />} />
        <Route path="/not_found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not_found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//Need to fix the Brand name beside logo
//Need to integrate the API
//Need to perform searching and sorting
//Need to add Price on card on Extreme Top Right corner
//Need to add some hover effect
//Optional -> Debouncing on Search Box
//Need to enter good amount of data in Moc API
