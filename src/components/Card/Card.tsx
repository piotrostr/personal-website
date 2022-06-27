import { Entry } from '../../data';

export const Card = ({
  title,
  description,
  imgSrc,
  imgWidth = 150,
  rounded = true,
}: Entry) => (
  <div
    className={`border-white bg-white h-64 w-64 rounded pt-7 flex flex-col items-center overflow-hidden shadow-sm hover:shadow-lg transition`}
  >
    <h2 className="text-xl mb-1">{title}</h2>
    <div className="text-base mb-5 text-center pl-3 pr-3">{description}</div>
    <img
      src={imgSrc}
      width={imgWidth}
      className={`${rounded && 'rounded'}`}
      alt={`image-${title}`}
    />
  </div>
);
