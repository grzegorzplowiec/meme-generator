import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="main--header">
      <div className="header--left">
        <img src={logo} /> <h1>meme generator</h1>
      </div>
      <div className="header--right">
        <h3>react course - project 3</h3>
      </div>
    </header>
  );
}


