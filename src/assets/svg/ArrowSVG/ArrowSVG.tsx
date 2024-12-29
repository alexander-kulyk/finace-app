interface ArrowSVGProps {
  isHovered: boolean;
}

export const ArrowSVG = ({ isHovered }: ArrowSVGProps) => {
  return (
    <svg
      width='19'
      height='19'
      viewBox='0 0 19 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{
        transform: isHovered ? 'translateY(5px)' : 'translateY(0)',
        transition: 'transform 0.3s ease',
      }}
    >
      <path
        d='M9.48438 3.8125V14.3125'
        stroke={isHovered ? '#FFFFFF' : '#A1A1AA'}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.7344 9.0625L9.48438 14.3125L4.23438 9.0625'
        stroke={isHovered ? '#FFFFFF' : '#A1A1AA'}
        strokeWidth='1.125'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
