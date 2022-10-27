import { Nav } from "./Nav";
import Photo from "../img/photo.jpg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__photo"
        src={Photo}
        alt="Portfolio"
        width="200px"
      />
      <h1 className="header__name">Serkiz Viktoriia</h1>
      <p className="header__text">Junior Front-end Developer</p>
      <Nav></Nav>
    </header>
  );
}

export default Header;
