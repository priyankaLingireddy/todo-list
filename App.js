import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";
import "bootstrap/dist/css/bootstrap.css";
import { Router, Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
      <HookCakeContainer />
      <IceCreamContainer />
      <ItemContainer cake />
      <ItemContainer /> */}
        <Routes>
          <Route path="/home" element={<UsersContainer />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
