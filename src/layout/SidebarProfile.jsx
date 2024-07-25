import { Typewriter } from 'react-simple-typewriter';

const SidebarProfile = () => {
  return (
    <div className="p-6 overflow-hidden bg-white dark:bg-gray-800 rounded-3xl shadow-lg">
      <div className="text-center">
        <a href="index.html" className="block w-36 h-36 mx-auto mb-6 overflow-hidden border-4 rounded-full border-primary dark:border-gray-700">
          <img src="assets/img/user-sidebar-thumb.png" className="hidden dark:block" alt="Brown Reddick" />
          <img src="assets/img/user-sidebar-thumb-light.png" className="dark:hidden" alt="Brown Reddick" />
        </a>
        <h6 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Brown Reddick</h6>
        <div className="leading-none cd-headline clip is-full-width">
          <h6 className="text-lg cd-words-wrapper text-primary">
            <Typewriter
              words={['Web Developer', 'Photographer', 'Web Designer']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h6>
        </div>
      </div>
      <div className="pt-6 my-7 border-t border-gray-300 dark:border-gray-700">
        <ul className="space-y-4 text-gray-800 dark:text-gray-400">
          <li className="flex justify-between text-sm">
            <span className="font-medium">Residence:</span>
            <span>Canada</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="font-medium">City:</span>
            <span>Toronto</span>
          </li>
          <li className="flex justify-between text-sm">
            <span className="font-medium">Age:</span>
            <span>26</span>
          </li>
        </ul>
      </div>
      <div className="p-5 bg-gray-50 dark:bg-gray-700 rounded-2xl">
        <div className="text-sm font-medium text-gray-800 dark:text-white mb-4">Skills</div>
        <div className="grid grid-cols-4 gap-4">
          {[
            { skill: 'HTML', level: '90%' },
            { skill: 'CSS', level: '80%' },
            { skill: 'JS', level: '80%' },
            { skill: 'PHP', level: '90%' }
          ].map(({ skill, level }) => (
            <div key={skill} className="text-center">
              <div className="relative w-12 h-12 mx-auto mb-2">
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-primary">{level}</div>
              </div>
              <p className="mt-1 text-xs text-gray-800 dark:text-white">{skill}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <a
            href="mycv.html"
            download
            target="_blank"
            className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary border border-primary rounded-xl transition duration-300 hover:bg-primary-dark hover:border-primary-dark"
          >
            DOWNLOAD CV
            <span className="animate-bounce">
              <svg width="18" height="18" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0724 4.92378C12.0726 4.91034 12.0726 4.89691 12.0726 4.88368C12.0726 2.53968 10.1657 0.632812 7.82171 0.632812C5.47771 0.632812 3.57084 2.53968 3.57084 4.88368C3.57084 4.89691 3.57084 4.91055 3.57104 4.92378C1.95417 5.0992 0.691406 6.47267 0.691406 8.13554C0.691406 9.91704 2.14059 11.3662 3.92209 11.3662H4.33138C4.55606 11.3662 4.7384 11.1839 4.7384 10.9592C4.7384 10.7345 4.55606 10.5522 4.33138 10.5522H3.92209C2.58952 10.5522 1.50544 9.46811 1.50544 8.13554C1.50544 6.80297 2.58952 5.71888 3.92209 5.71888H4.00309C4.11868 5.71888 4.22898 5.66963 4.30611 5.58355C4.38345 5.49726 4.42028 5.38248 4.40766 5.2673C4.3924 5.12769 4.38487 5.00233 4.38487 4.88348C4.38487 2.98842 5.92665 1.44664 7.82171 1.44664C9.71678 1.44664 11.2586 2.98842 11.2586 4.88348C11.2586 5.00233 11.251 5.12769 11.2358 5.2673C11.2231 5.38228 11.26 5.49726 11.3373 5.58355C11.4144 5.66963 11.5247 5.71888 11.6403 5.71888H11.7217C13.0541 5.71888 14.138 6.80297 14.138 8.13554C14.138 9.46811 13.0541 10.5522 11.7217 10.5522H11.288C11.0634 10.5522 10.881 10.7345 10.881 10.9592C10.881 11.1839 11.0634 11.3662 11.288 11.3662H11.7217C13.5028 11.3662 14.952 9.91704 14.952 8.13554C14.952 6.47247 13.6892 5.099 12.0724 4.92378Z" fill="white" />
                <path d="M6.26314 11.942C6.0877 12.1876 6.26327 12.5288 6.5651 12.5288H8.81272L7.3764 14.5396C7.25728 14.7064 7.29591 14.9382 7.46268 15.0573C7.62945 15.1764 7.86122 15.1378 7.98034 14.971L9.83579 12.3734C10.0112 12.1278 9.83566 11.7866 9.53382 11.7866H7.2862L8.72252 9.77578C8.84164 9.609 8.80302 9.37724 8.63624 9.25811C8.46947 9.13899 8.23771 9.17762 8.11858 9.34439L6.26314 11.942Z" fill="white" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
