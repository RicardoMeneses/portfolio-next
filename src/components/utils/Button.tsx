import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';

interface Props {
  text: string;
  haveIcon?: boolean;
  icon?: IconProp;
}

const Button: React.FC<Props> = ({ text, haveIcon, icon }) => {
  return (
    <Link
      href='/CV.pdf'
      target='_blank'
      download
      className='rounded-[29px] bg-[#1F2A42] text-white px-10 py-2 text-1xl drop-shadow-[-10px_10px_3px_rgba(0,0,0,0.25)] '
    >
      {text}
      {haveIcon && icon && <FontAwesomeIcon icon={icon} className='ml-2' />}
    </Link>
  );
};

export default Button;
