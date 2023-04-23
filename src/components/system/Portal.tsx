import React from 'react';
import ReactDom from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector: string;
}

function Portal({ children, selector }: Props) {
  const el = document.querySelector(selector) as HTMLElement;

  return ReactDom.createPortal(children, el);
}

export default Portal;
