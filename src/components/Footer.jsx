export default function Footer() {
  const footerMenus = [
    {
      title: 'Menu',
      links: [
        { text: 'Characters' },
        { text: 'Comics' },
        { text: 'Movies' },
        { text: 'TV' },
        { text: 'Games' },
        { text: 'Videos' },
        { text: 'News' },
      ],
      secondtitle: 'SHOP',

      secondlinks: [{ text: 'Shop DC' }, { text: 'Shop DC Collectibles' }],
    },
    {
      title: 'DC',
      links: [
        { text: 'Terms Of Use' },
        { text: 'Privacy Policy(New)' },
        { text: 'Ad Choices' },
        { text: 'Advertising' },
        { text: 'Jobs' },
        { text: 'Subscription' },
        { text: 'Talent Workshop' },
        { text: 'CPSC Certificates' },
        { text: 'Ratings' },
        { text: 'Shop Help' },
        { text: 'Contact Us' },
      ],
      secondtitle: '',

      secondlinks: [{ text: '' }, { text: '' }],
    },

    {
      title: 'SITES',
      links: [
        { text: 'DC' },
        { text: 'MAD Magazine' },
        { text: 'DC Kids' },
        { text: 'DC Universe' },
        { text: 'DC Power Visa' },
      ],
      secondtitle: '',

      secondlinks: [{ text: '' }, { text: '' }],
    },
  ];
  return (
    <>
      <footer className="bg-footer text-light mt-auto">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-8">
              <div className="row g-3">
                {footerMenus.map((menu, index) => (
                  <div key={index} className="col-6 col-sm-4">
                    <h5 className="text-uppercase mb-2">{menu.title}</h5>
                    <ul className="list-unstyled mb-0">
                      {menu.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <a
                              className="link-light text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                              href="#"
                            >
                              {link.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                    <h5 className="text-uppercase mt-5">{menu.secondtitle}</h5>

                    <ul className="list-unstyled mb-0">
                      {menu.secondlinks.map((link, index) => {
                        return (
                          <li key={index}>
                            <a
                              className="link-light text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                              href="#"
                            >
                              {link.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
                {/*

                */}

                {/*
                <div className="col-6 col-sm-4">
                  <h5 className="text-uppercase">DC</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light  text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Privacy policy (New)
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Ad Choices
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Advertising
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light  text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Jobs
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Subscription
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Talent Workshops
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light  text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        CPSC Certificates
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light  text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Ratings
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Shop Help
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>

                */}

                {/*
                Terzo Li
                <div className="col-6 col-sm-4">
                  <h5 className="text-uppercase">SITES</h5>
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        DC
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        MAD Magazine
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        DC Kids
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light text-white-50  link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        DC Universe
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-light  text-white-50 link-underline-opacity-0 link-underline-opacity-75-hover"
                        href="#"
                      >
                        DC Power Visa
                      </a>
                    </li>
                  </ul>
                </div>
                */}
              </div>
            </div>

            <div className="col-12 col-md-4">
              <img
                src="public\img\dc-logo-bg.png"
                alt="Immagine footer"
                className="img-fluid rounded shadow-sm"
                style={{ maxWidth: '380px' }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
