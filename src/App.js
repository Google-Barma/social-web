import "./App.css";

import Header from "./Components/Header";
import Aside from "./Components/Aside";
import Main from "./Components/Main";
import Profile from "./Components/Profile";
import Post from "./Components/Post";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <Main>
        <Profile />
        <Post />
      </Main>
    </div>
  );
}

export default App;
