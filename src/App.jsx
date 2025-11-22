import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import EmployeeComponent from "./components/EmployeeComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    {/* http://localhost:3000 */}
                    <Route path={"/"} element={<ListEmployeeComponent/>}/>
                    {/* http://localhost:3000/employees */}
                    <Route path={"/employees"} element={<ListEmployeeComponent/>}/>
                    {/* http://localhost:3000/add-employee */}
                    <Route path={"/add-employee"} element={<EmployeeComponent/>}/>
                    {/* http://localhost:3000/edit-employee/{id} */}
                    <Route path={"/edit-employee/:id"} element={<EmployeeComponent/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </>
    )
}

export default App
