import React, { PureComponent } from 'react';

interface IProps {
  name: string;
  age?: number;
}

interface IState {
  message: string;
  counter: number;
}

class Demo02 extends PureComponent<IProps, IState> {
  address = '洛杉矶';

  state = {
    message: 'Hello World',
    counter: 100
  };

  // constructor(props: IProps) {
  //   super(props);

  //   this.state = {
  //     message: 'Hello World',
  //     counter: 100
  //   };
  // }

  render(): React.ReactNode {
    return (
      <div>
        <div>name： {this.props.name}</div>
        <div>age: {this.props.age}</div>
        <div>message: {this.state.message}</div>
        <div>counter:{this.state.counter}</div>
        <div>address: {this.address}</div>
      </div>
    );
  }
}

export default Demo02;
