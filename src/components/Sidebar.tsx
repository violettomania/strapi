import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { hideSidebar } from '../slices/sidebarSlice';
import subLinks from '../data';
import { FaTimes } from 'react-icons/fa';
import SubmenuItem from './SubmenuItem';

export default function Sidebar() {
  const isSidebarShown = useAppSelector((state) => state.sidebar.value);
  const dispatch = useAppDispatch();

  return (
    <div className={`sidebar-wrapper ${isSidebarShown && 'show'}`}>
      <aside className='sidebar'>
        <button className='close-btn' onClick={() => dispatch(hideSidebar())}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          <article>
            {subLinks.map((item) => (
              <SubmenuItem
                key={item.page}
                {...{
                  className: 'sidebar-sublinks',
                  ...item,
                }}
              />
            ))}
          </article>
        </div>
      </aside>
    </div>
  );
}
