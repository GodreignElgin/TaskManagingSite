import HomePage from "./Pages/HomePage/HomePage";
import Login1 from "./Pages/Login/Login1";
import Register from './Pages/Signup/Register';
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import { Routes, Route } from "react-router-dom";
import ProjectSettings from "./Pages/ProjectSettings/ProjectSettings";
import Pricing from "./Pages/Pricing/Pricing";
import Settings from "./Pages/Projects/Settings";
import ListPage from "./Pages/Projects/ListPage";
import SamplTestSummary from "./Pages/AdminPanel/SamplTestSummary";
import SampleTestBoards from "./Pages/AdminPanel/SampleTestBoards";
import SampleTestLink from "./Pages/AdminPanel/SampleTestLink";
import SampleTestSettings from "./Pages/AdminPanel/SampleTestSettings";


function App() {
  return (
    // <ProjectSettings/>
    // <AdminPanel/> 
    // <InfoToast/>
    // <Dummy/>
    <Routes>
      <Route path="/user" element={<ProjectSettings/>}></Route>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/login" element={<Login1/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/admin" element={<AdminPanel/>}></Route>
      <Route path="/summary" element={<SamplTestSummary/>}></Route>
      <Route path="/user" element={<ProjectSettings/>}></Route>
      <Route path="/boards" element={<SampleTestBoards/>}></Route>
      <Route path="/list" element={<SampleTestLink/>}></Route>
      <Route path="/settings" element={<SampleTestSettings/>}></Route>
      {/* <Route path="/summary" element={<SampleTestSummary />} />
      <Route path="/boards" element={<SampleTestBoards />} /> */}
     </Routes>
  );
}

export default App;  