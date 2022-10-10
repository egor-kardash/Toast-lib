import { FC, ReactNode, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

interface IModalProps {
  children: ReactNode;
}

export const ToastPortal: FC<IModalProps> = ({ children }) => {
  const [domIsRendered, setDomIsRendered] = useState(false);

  useEffect(() => {
    setDomIsRendered(true);
    const toastRoot = document.createElement('div');
    toastRoot.id = 'toast-root';
    document.body.appendChild(toastRoot);

    return () => {
      document.body.removeChild(toastRoot);
    };
  }, []);

  return domIsRendered
    ? createPortal(children, document.getElementById('toast-root')!)
    : null;
};
