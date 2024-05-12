"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { GetProp, TableProps } from "antd";
import qs from "qs";
import { ConfigProvider } from "antd";
import Tender from "./tender";

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
    username: string;
    password: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
  };
}

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

    render: (name) => `${name.first} ${name.last}`,
    width: "20%",
  },
  {
    title: "نوع فراخوان",
    dataIndex: "login",
    render: (login) => `${login.username} ${login.password}`,

    width: "20%",
  },
  {
    title: "شماره فراخوان",
    dataIndex: "location",
    render: (location) => location.street.number,

    width: "10%",
  },
  {
    title: "تاریخ شروع",
    dataIndex: "location",
    render: (location) => location.country,

    width: "10%",
  },
  {
    title: "تاریخ پایان",
    dataIndex: "location",
    render: (location) => location.city,

    width: "10%",
  },
  {
    title: "وضعیت",
    dataIndex: "location",
    render: (location) => location.state,
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
    <ConfigProvider
      direction="rtl"
      theme={{
        token: {
          fontFamily: "iran_sans",
        },
      }}
    >
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <Tender first={record.name.first} last={record.name.last} />
          ),
          expandedRowKeys: [expandedKey],
          onExpand: (record, expanded) =>
            expandedKey === expanded.login.uuid
              ? setExpandedKey("")
              : setExpandedKey(expanded.login.uuid),
        }}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </ConfigProvider>
  );
};

export default TenderTable;
