import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='bg-slate-900 text-white  flex flex-col justify-center items-center min-h-[10vh] font-mono'>
      <h5>
        Made with &#128150; by{" "}
        <a
          href='https://www.linkedin.com/in/kevinnahuelf/'
          target='_blank'
          rel='noopener noreferrer'
          className='underline'
        >
          Kevin Flores
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
