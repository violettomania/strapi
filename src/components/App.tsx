import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';
import Submenu from './Submenu';

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
}
