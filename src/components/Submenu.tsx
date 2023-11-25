import { useAppSelector } from '../hooks/hooks';

import subLinks from '../data';
import SubmenuItem from './SubmenuItem';

export default function Submenu() {
  const isSubmenuShown = useAppSelector((state) => state.submenu.value);

  return (
    <aside
      className={`submenu ${isSubmenuShown && 'show'}`}
      style={{ left: '337.539px', top: '61.5px' }}
    >
      <section>
        {subLinks.map((item) => (
          <SubmenuItem key={item.page} {...item} />
        ))}
      </section>
    </aside>
  );
}
