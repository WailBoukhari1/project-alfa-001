import { FaTimes, FaHome, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';

const MobileMenuSidebar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`fixed top-0 ${isMenuOpen ? 'right-0' : '-right-full'} w-1/2 max-w-md bg-white dark:bg-gray-900 z-50 h-full xl:hidden transition-all duration-300 py-12 px-8 overflow-y-scroll shadow-lg`}>
      <button
        className="absolute flex items-center justify-center w-9 h-9 text-sm text-gray-100 rounded-full top-4 right-4 bg-gray-700 hover:bg-gray-600 transition-colors"
        aria-label="Close Menu"
        onClick={toggleMenu}
      >
        <FaTimes />
      </button>
      <div className="mb-6 text-lg font-medium text-gray-900 dark:text-gray-100">
        Menu
      </div>
      <ul className="space-y-5 font-normal">
        <li className="relative group">
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="w-5 text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
              <FaHome />
            </span>
            <span className="group-hover:text-primary transition-colors dark:group-hover:text-gray-100">
              Home
            </span>
          </a>
        </li>
        {/* Repeat similar structure for other menu items */}
      </ul>
      <div className="mt-8 font-medium text-gray-900 dark:text-gray-100 text-md">
        Get in Touch
      </div>
      <div className="flex items-center space-x-4 mt-4">
        <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors" title="Share with Facebook">
          <FaFacebookF />
        </a>
        <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors" title="Share with LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors" title="Share with Twitter">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-900 dark:text-gray-100 hover:text-primary transition-colors" title="Share with Instagram">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
MobileMenuSidebar.propTypes = {
    isMenuOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  };
  
export default MobileMenuSidebar;
