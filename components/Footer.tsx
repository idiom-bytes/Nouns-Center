import React from 'react';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div className="relative xs:px-6 sm:px-0 text-black font-medium gap-2 items-center w-full flex flex-col text-center pb-6">
      {asPath === '/' && (
        <p>OceanNouns Center serves as the knowledge center &#38; resource hub for OceanNouns DAO</p>
      )}

      <div className="flex gap-8 items-center">
        {/* Twitter */}
        <a href="https://twitter.com/oceannouns" target="_blank" rel="noreferrer">
          <svg
            className="w-6 h-8 fill-black hover:fill-gray-400 transition cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
