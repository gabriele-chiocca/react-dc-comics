export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 align">
        <img className="logo-navbar" src="img\dc-logo.png" alt="Logo" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="me-4 collapse navbar-collapse no-grow" id="navbarNav">
          <ul className="navbar-nav nav-underlined">
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                CHARACTERS
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link fw-medium" href="#">
                COMICS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                MOVIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                TV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                GAMES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                COLLECTIBLES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                VIDEOS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                FANS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                NEWS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-medium" href="#">
                SHOP
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
