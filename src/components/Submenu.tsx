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
      style={{
        left: 337.539 + selectedSubmenuIndex * 160,
        top: 61.5,
      }}
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
