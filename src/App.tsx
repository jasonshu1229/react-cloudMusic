import React, { Suspense } from 'react';
import routes from './router';
import { useRoutes, Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch, shallowAppEqual } from './store/hooks';
import { changeMessageAction } from './store/modules/counter';

import Demo02 from './views/demo/class';

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      disrection: state.counter.direction
    }),
    shallowAppEqual
  );

  const dispatch = useAppDispatch();
  const handleMessage = () => {
    dispatch(changeMessageAction('哈哈哈哈哈哈'));
  };

  return (
    <div className="App">
      <div className="header">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前Message：{message}</h2>
      <Demo02 name="lsh" age={18} />
      <button onClick={handleMessage}>修改Message</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
}

export default App;
