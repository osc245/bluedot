import React from 'react';
import clsx from 'clsx';

export type TagProps = {
  className?: string,
  children: React.ReactNode;
};

export const Tag: React.FC<TagProps> = ({
  className,
  children,
}) => {
  return (
    <span
      role="status"
      className={clsx(
        'tag inline-flex items-center px-4 py-1.5 rounded-lg text-xs font-semibold border border-bluedot-lighter text-bluedot-black',
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
