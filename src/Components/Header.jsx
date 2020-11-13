import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="image-wrapper">
        <img className="logo" src={logo} alt="logo" width="100" />
      </div>
    </header>
  );
}
