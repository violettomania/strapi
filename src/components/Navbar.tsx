import logo from '../images/logo.svg';
import subLinks from '../data';
import { FaBars } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import { showSidebar } from '../slices/sidebarSlice';
import { showSubmenu, hideSubmenu } from '../slices/submenuSlice';

export default function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button
            className='btn toggle-btn'
            onClick={() => dispatch(showSidebar())}
          >
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {subLinks.map(({ page }, index) => (
            <li key={page}>
              <button
                className='link-btn'
                onMouseEnter={() => dispatch(showSubmenu(index))}
                onMouseLeave={() => dispatch(hideSubmenu())}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
}
