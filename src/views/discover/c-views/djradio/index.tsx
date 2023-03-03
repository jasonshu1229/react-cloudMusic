import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const Djradio: FC<IProps> = () => {
  return <div>Djradio</div>;
};

export default memo(Djradio);
