import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Mine: FC<IProps> = () => {
  return <div>Mine</div>;
};

export default memo(Mine);
