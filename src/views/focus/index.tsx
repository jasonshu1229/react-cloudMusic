import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Focus: FC<IProps> = () => {
  return <div>Focus</div>;
};

export default memo(Focus);
