import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Artist: FC<IProps> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
