import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Discover: FC<IProps> = () => {
  return <div>Discover</div>;
};

export default memo(Discover);
