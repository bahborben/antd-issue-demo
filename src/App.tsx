import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { ColumnsType } from 'antd/lib/table';
import BaseTable from 'component/pub/table/BaseTable';

function App() {
  const columns: ColumnsType<any> = [
    {title:"编号", dataIndex: "code"},
    {title:"名称", dataIndex: "name"},
  ]
  
  const demoData = [
    { id: 1, code: "P-01", name: "Panda" },
    { id: 2, code: "T-01", name: "Tiger" }
  ];
  return (
    <Router>
      <BaseTable
        columns={columns}
        data={demoData}
        rowKey="id"
        isMultiSelect={true}
        // onRowSelected={onRowSelected}
        />
    </Router>
  );
}

export default App;
