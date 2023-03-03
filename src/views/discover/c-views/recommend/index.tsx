import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Recommend: FC<IProps> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
