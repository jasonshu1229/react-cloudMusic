import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Songs: FC<IProps> = () => {
  return <div>Songs</div>;
};

export default memo(Songs);
