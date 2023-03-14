import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Player: FC<IProps> = () => {
  return <div>Player</div>;
};

export default memo(Player);
