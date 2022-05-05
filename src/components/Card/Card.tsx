import { Entry } from '../../data';

export const Card = ({ title, description }: Entry) => (
  <div className="border-white bg-white h-64 w-64 rounded">
    <h2 className="text-xl">{title}</h2>
    <div>{description}</div>
  </div>
);
