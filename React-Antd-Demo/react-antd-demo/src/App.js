import React from 'react';
import { Button,Pagination } from 'antd';


function App() {

  function pageChange(page,pageSize){
    console.log(page,pageSize);
  }
  return (
    <div className="App">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Pagination showQuickJumper defaultCurrent={1} total={500} onChange={pageChange}/>
    </div>
  );
}

export default App;
