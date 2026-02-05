export default function Header() {
  const navElements = [
    {
      url: '/',
      text: 'CHARACTERS',
      active: false,
    },

    {
      url: '/comics',
      text: 'COMICS',
      active: true,
    },

    {
      url: '/movies',
      text: 'MOVIES',
      active: false,
    },

    {
      url: '/tv',
      text: 'TV',
      active: false,
    },

    {
      url: '/games',
      text: 'GAMES',
      active: false,
    },

    {
      url: '/collectibles',
      text: 'COLLECTIBLES',
      active: false,
    },

    {
      url: '/videos',
      text: 'VIDEOS',
      active: false,
    },

    {
      url: '/fans',
      text: 'FANS',
      active: false,
    },

    {
      url: '/news',
      text: 'NEWS',
      active: false,
    },

    {
      url: '/shop',
      text: 'SHOP',
      active: false,
    },
  ];

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
            {navElements.map((element, index) => {
              return (
                <li
                  key={index}
                  className={`nav-item ${element.active ? 'active' : ''}`}
                >
                  <a className="nav-link fw-medium" href={element.url}>
                    {element.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
