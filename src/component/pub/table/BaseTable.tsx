import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { GetRowKey, TableRowSelection } from 'antd/lib/table/interface';
import {GetComponentProps} from 'rc-table/lib/interface'

export interface IBaseTableProps<RecordType> {
  columns: ColumnsType<RecordType>,
  data: RecordType[],
  rowKey: string | GetRowKey<RecordType>,
  isMultiSelect?: boolean,
  onRowSelected?: (records: RecordType[], recordKeys: React.Key[]) => void,
  onRowFocused?: (record: RecordType, index: number) => void
}

const BaseTable: React.FC<IBaseTableProps<any>> = <RecordType extends object>(props: IBaseTableProps<RecordType>) => {

  const [selectedKeys, setSelectedKeys] = useState([] as React.Key[]);

  const rowSelection: TableRowSelection<RecordType> = {
    type: (props.isMultiSelect) ? "checkbox" : "radio",
    onChange: (keys, rows) => {
      if(props.onRowSelected)
        props.onRowSelected(rows, keys);
      setSelectedKeys(keys);
    },
    selectedRowKeys: selectedKeys,
  };

  const toggleRowSelection = (rec: RecordType, index: number): void => {
    let key: React.Key;
    let record: RecordType = props.data[index];
    if(typeof(props.rowKey) === "function"){
      console.debug("row key is function");
      key = props.rowKey(record, index);
      console.debug("key value:", key);
    } else {
      console.debug("row key is string");
      key = (record as any)[props.rowKey as string];
      console.debug("key value:", key);
    }
    let sks = Array.from(selectedKeys);
    console.debug("current selected keys:", sks);
    if(sks.includes(key))
      sks.splice(sks.indexOf(key), 1);
    else
      sks.push(key);
    console.debug("prepared selected keys:", sks);
    setSelectedKeys(sks);
  }

  const onRow: GetComponentProps<RecordType> = (record: RecordType, index?: number): React.HTMLAttributes<HTMLElement> => {
    return {
      onClick: (event) => {
        if(index !== undefined){
          // setFocusRowIndex(index);
          if(event.ctrlKey){
            toggleRowSelection(record, index);
          }
        }
      },
    }
  }

  return (
    <Table
      bordered={true}
      size="small"
      columns={props.columns}
      dataSource={props.data}
      // dataSource={[
      //   { id: 1, code: "P-01", name: "Panda" } as RecordType,
      //   { id: 2, code: "T-01", name: "Tiger" } as RecordType
      // ]}
      rowKey={props.rowKey}
      rowSelection={rowSelection}
      onRow={onRow} />
  );
}
export default BaseTable;