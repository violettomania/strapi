import logo from '../images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useAppDispatch } from '../hooks/hooks';
import { showSubmenu, hideSubmenu } from '../slices/submenuSlice';

export default function Navbar() {
  const dispatch = useAppDispatch();

  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li
            onMouseEnter={() => dispatch(showSubmenu())}
            onMouseLeave={() => dispatch(hideSubmenu())}
          >
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
  );
}
