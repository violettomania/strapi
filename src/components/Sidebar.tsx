import subLinks from '../data';
import { FaTimes } from 'react-icons/fa';

export function Sidebar() {
  return (
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
  );
}
