import Profile from "./Profile";
import Post from "./Post";

export default function Main() {
  return (
    <main className="main">
      <div className="content">
        <Profile />
        <Post />
      </div>
    </main>
  );
}
