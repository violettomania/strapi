import logo from '../images/logo.svg';
import phoneImg from '../images/phone.svg';
import subLinks from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <nav className='nav'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt='' />
            <button className='btn toggle-btn'>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn'>products</button>
            </li>
            <li>
              <button className='link-btn'>developers</button>
            </li>
            <li>
              <button className='link-btn'>company</button>
            </li>
          </ul>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </nav>
      <div className='sidebar-wrapper'>
        <aside className='sidebar'>
          <button className='close-btn'>
            <FaTimes />
          </button>
          <div className='sidebar-links'>
            <article>
              {subLinks.map((item, index) => {
                const { links, page } = item;
                return (
                  <div key={index}>
                    <h4>{page}</h4>
                    <div className='sidebar-sublinks'>
                      {links.map((link, index) => {
                        const { url, icon, label } = link;
                        return (
                          <a href={url} key={index}>
                            {icon}
                            {label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </article>
          </div>
        </aside>
      </div>
      <section className='hero'>
        <div className='hero-center'>
          <article className='hero-info'>
            <h1>
              Payments infrastructure <br />
              for the internet
            </h1>
            <p>
              Millions of companies of all sizes—from startups to Fortune
              500s—use Stripe’s software and APIs to accept payments, send
              payouts, and manage their businesses online.
            </p>
            <button className='btn'>Start now</button>
          </article>
          <article className='hero-images'>
            <img src={phoneImg} className='phone-img' alt='phone' />
          </article>
        </div>
      </section>
      <aside className='submenu' style={{ left: '337.539px', top: '61.5px' }}>
        <section>
          {subLinks.map((item, index) => {
            const { links, page } = item;
            return (
              <div key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </aside>
    </>
  );
}
