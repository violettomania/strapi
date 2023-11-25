import { useAppSelector } from '../hooks/hooks';

import subLinks from '../data';

export default function Submenu() {
  const isSubmenuShown = useAppSelector((state) => state.submenu.value);

  return (
    <aside
      className={`submenu ${isSubmenuShown && 'show'}`}
      style={{ left: '337.539px', top: '61.5px' }}
    >
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
  );
}
