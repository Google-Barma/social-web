import "./App.css";

import Header from "./Components/Header";
import Aside from "./Components/Aside";

import profile from "./images/profile-logo.jpg";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <main className="main">
        <div className="content">
          <section className="profile__section">
            <div className="profile">
              <div className="profile__image-wrapper">
                <img
                  className="profile__logo"
                  src={profile}
                  alt="profile logo"
                  width="100"
                />
              </div>
              <p className="profile__description">blabalbal</p>
            </div>
          </section>
          <section className="post__section">
            <h2>My posts</h2>
            <div>post1</div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
