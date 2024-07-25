import { FaHome, FaShareAlt, FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="bg-background dark:bg-background-dark p-4 rounded-xl shadow-lg flex flex-col items-center space-y-6">
      <div className="w-16 h-16 flex items-center justify-center border-2 border-primary dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <a href="index.html">
          <img src="assets/img/site-logo.svg" alt="xxx" className="w-12 h-12"/>
        </a>
      </div>
      <div className="menu">
        <ul className="space-y-4 text-center">
          <li className="group">
            <a href="#home" className="w-12 h-12 flex items-center justify-center rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
              <span className="text-text-dark dark:text-text-light group-hover:text-primary">
                <FaHome size={24} />
              </span>
            </a>
          </li>
          {/* Repeat similar structure for other menu items */}
        </ul>
      </div>
      <div className="relative group">
        <button className="w-12 h-12 flex items-center justify-center text-lg border-2 border-primary dark:border-gray-700 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800 text-text-dark dark:text-text-light transition-colors" aria-label="Share">
          <FaShareAlt />
        </button>
        <div className="absolute bottom-0 flex items-center p-4 space-x-4 transition-all duration-300 transform -translate-y-1/2 opacity-0 invisible top-1/2 bg-gray-100 dark:bg-gray-800 rounded-lg right-16 group-hover:opacity-100 group-hover:visible">
          <a href="#" className="text-text-dark dark:text-text-light hover:text-primary" title="Share with Facebook">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-text-dark dark:text-text-light hover:text-primary" title="Share with Linkedin">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-text-dark dark:text-text-light hover:text-primary" title="Share with Twitter">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-text-dark dark:text-text-light hover:text-primary" title="Share with Instagram">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
