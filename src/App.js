import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Login from "./components/Login";


function App() {
  return (
    <div className="container-fluid">
      <ToastContainer />
      <Header />
      <Login />
    </div>
  );
}

export default App;
