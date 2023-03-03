import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Album: FC<IProps> = () => {
  return <div>Album</div>;
};

export default memo(Album);
