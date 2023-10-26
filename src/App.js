import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Update from "./components/update";
import Graph from "./components/graph";
import Stats from "./components/stats";
import QuestionAnalysis from "./components/QA";
import Syllabus from "./components/Sllybus";
import Popup from "./components/popup";
import { ContextProvider } from "./contexts/ContextProvider";
import { useStateContext } from './contexts/ContextProvider';
import updatebutton from "./components/updatebutton";
import Updatebutton from "./components/updatebutton";

function App() {
 // const { open } = useStateContext();
 const [open, setOpen] = useState(false);
  return (
    <ContextProvider>
    <div className="app">
      {open && (
        <div className="pop">
          <Popup />
        </div>
      )}
      <div>
       <Navbar />
       <updatebutton/>
        <div className="home">
          <Sidebar />
          <div className="main">
            <p>Skill Test</p>
            <div className="compo">
              <div className="row1">
                <Update />
                
                <Stats />
                <Graph />
              </div>
              <div className="row2">
                <Syllabus />
                <QuestionAnalysis />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ContextProvider>
  );
}

export default App;
