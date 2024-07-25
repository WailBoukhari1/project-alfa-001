import  { useState } from 'react';
import MobileMenuBar from './MobileMenuBar';
import MobileMenuSidebar from './MobileMenuSidebar';
import SidebarProfile from './SidebarProfile';
import NavBar from './NavBar';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-background dark:bg-background-dark/80">
      <MobileMenuBar toggleMenu={toggleMenu} />
      <MobileMenuSidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex flex-col xl:flex-row h-screen">
        {/* SidebarProfile for large screens */}
        <div className="hidden xl:flex fixed top-1/2 left-8 transform -translate-y-1/2 z-50">
          <SidebarProfile />
        </div>

        {/* Main content */}
        <div className="flex-1 flex justify-center items-center p-10 mx-8 w-full">
          <div className="w-full max-w-4xl">
            <main className="text-text-dark dark:text-text-light">{children}</main>
          </div>
        </div>

        {/* NavBar on the right for large screens */}
        <div className="hidden xl:flex fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;