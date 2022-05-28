import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Slideshow = ({ children }: Props) => (
  <div
    id="slideshow"
    className="flex flex-row overflow-x-auto space-x-8 p-8 lg:max-w-lg xl:max-w-2xl"
  >
    {children}
  </div>
);
