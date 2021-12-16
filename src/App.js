import './App.css';
import SideBar from "./components/sideBar/sideBar"
import TopBar from "./components/TopBar/TopBar"
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="app">
        <SideBar/>
        <TopBar/>
        <Main/>
    </div>
  );
}

export default App;
