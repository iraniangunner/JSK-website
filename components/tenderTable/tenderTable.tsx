"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { GetProp, TableProps } from "antd";
import qs from "qs";
import { ConfigProvider } from "antd";

type ColumnsType<T> = TableProps<T>["columns"];
type TablePaginationConfig = Exclude<
  GetProp<TableProps, "pagination">,
  boolean
>;

interface DataType {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  login: {
    uuid: string;
  };
}

// interface DataType {
//   id: number;
//   type: string;
//   T_number: number;
//   start_date: string;
//   end_date: string;
//   status: string;
//   description: string;
// }

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

const columns: ColumnsType<DataType> = [
  {
    title: "عنوان فراخوان",
    dataIndex: "name",
    // dataIndex: "type",
    // sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "نوع فراخوان",
    dataIndex: "gender",
    // dataIndex: "start_date",
    // filters: [
    //   { text: "Male", value: "male" },
    //   { text: "Female", value: "female" },
    // ],
    width: "20%",
  },
  {
    title: "شماره فراخوان",
    dataIndex: "email",
    // dataIndex:"end_date"
  },
];

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const TenderTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const [expandedKey, setExpandedKey] = useState("");

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(
        getRandomuserParams(tableParams)
      )}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [tableParams.pagination?.current, tableParams.pagination?.pageSize]);

  const handleTableChange: TableProps["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <ConfigProvider direction="rtl">
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.login.uuid}</p>
            // <p style={{ margin: 0 }}>{record.id}</p>
          ),
          expandedRowKeys: [expandedKey],
          onExpand: (record, expanded) =>
            expandedKey === expanded.login.uuid
              ? setExpandedKey("")
              : setExpandedKey(expanded.login.uuid),
            // expandedKey === expanded.id.toString()
            //   ? setExpandedKey("")
            //   : setExpandedKey(expanded.id.toString()),
        }}
        rowKey={(record) => record.login.uuid}
        // rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </ConfigProvider>
  );
};

export default TenderTable;
