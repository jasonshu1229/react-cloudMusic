import React, { memo, FC } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const AppFooter: FC<IProps> = () => {
  return <h2>App Footer</h2>;
};

export default memo(AppFooter);
