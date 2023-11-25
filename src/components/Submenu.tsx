import { useAppSelector } from '../hooks/hooks';
import subLinks from '../data';
import SubmenuItem from './SubmenuItem';

const isSubmenuShown = (selectedSubmenuIndex: number) => {
  return selectedSubmenuIndex >= 0;
};

export default function Submenu() {
  const selectedSubmenuIndex = useAppSelector(
    (state) => state.submenu.selectedIndex
  );

  return (
    <aside
      className={`submenu ${isSubmenuShown(selectedSubmenuIndex) && 'show'}`}
      style={{
        left: 337.539 + selectedSubmenuIndex * 160,
        top: 61.5,
      }}
    >
      <section>
        {isSubmenuShown(selectedSubmenuIndex) && (
          <SubmenuItem
            key={subLinks[selectedSubmenuIndex].page}
            {...{
              className: 'submenu-center col-4',
              ...subLinks[selectedSubmenuIndex],
            }}
          />
        )}
      </section>
    </aside>
  );
}
