import React from 'react';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <div className={`container`} title={'manu'} data-test={'container'}>
      hello world
    </div>
  );
};

export default App;
