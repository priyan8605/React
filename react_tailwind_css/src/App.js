import "./App.css";
import MainBox from "./components/MainBox";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className=" w-screen min-h-screen flex">

      <SideBar/>
      <MainBox/>

    </div>
  )
}

export default App;