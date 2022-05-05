import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Slideshow = ({ children }: Props) => (
  <div className="flex flex-row overflow-x-auto space-x-8 p-8">{children}</div>
);
