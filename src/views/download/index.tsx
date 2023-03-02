import React, { memo } from 'react';
import type { ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  name: string;
  age: number;
  height?: number;
}

const Download: React.FC<IProps> = (props) => {
  return (
    <div>
      Download
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
      <div>height: {props.height}</div>
    </div>
  );
};

Download.defaultProps = {
  name: 'defaultPropsName',
  age: 23,
  height: 183
};

Download.displayName = 'Download';

// const Download = (props: IProps) => {
//   return (
//     <div>
//       Download
//       <div>name: {props.name}</div>
//       <div>age: {props.age}</div>
//       <div>height: {props.height}</div>
//     </div>
//   );
// };

export default memo(Download);
