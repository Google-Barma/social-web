import "./App.css";

import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}

export default App;
