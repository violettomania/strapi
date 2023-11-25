import { useAppSelector } from '../hooks/hooks';

import subLinks from '../data';
import SubmenuItem from './SubmenuItem';

export default function Submenu() {
  const selectedSubmenuIndex = useAppSelector(
    (state) => state.submenu.selectedIndex
  );

  return (
    <aside
      className={`submenu ${selectedSubmenuIndex && 'show'}`}
      style={{ left: '337.539px', top: '61.5px' }}
    >
      <section>
        {subLinks[selectedSubmenuIndex].page}
        {subLinks.map((item) => (
          <SubmenuItem key={item.page} {...item} />
        ))}
      </section>
    </aside>
  );
}
