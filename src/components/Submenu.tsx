import { useAppSelector } from '../hooks/hooks';
import subLinks from '../data';
import SubmenuItem from './SubmenuItem';

export default function Submenu() {
  const selectedSubmenuIndex = useAppSelector(
    (state) => state.submenu.selectedIndex
  );

  return (
    <aside
      className={`submenu ${selectedSubmenuIndex >= 0 && 'show'}`}
      style={{ left: '337.539px', top: '61.5px' }}
    >
      <section>
        {selectedSubmenuIndex >= 0 && (
          <SubmenuItem
            key={subLinks[selectedSubmenuIndex].page}
            {...subLinks[selectedSubmenuIndex]}
          />
        )}
      </section>
    </aside>
  );
}
