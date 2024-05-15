"use client";
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { GetProp, TableProps } from "antd";
import qs from "qs";
import { ConfigProvider } from "antd";
import faIR from "antd/es/locale/fa_IR";
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
    width: "30%",
  },
  {
    title: "نوع فراخوان",
    dataIndex: "login",
    filters: [
      {
        text: "مناقصه",
        value: "tender",
      },
      {
        text: " مزایده",
        value: "auction",
      },
      {
        text: "استعلام",
        value: "inquiry",
      },
    ],
    onFilter: (value, record) =>
      record.login.username.startsWith(value as string),
    render: (login) => `${login.username} ${login.password}`,

    width: "15%",
  },
  {
    title: "شماره فراخوان",
    dataIndex: "location",
    render: (location) => location.street.number,
    width: "15%",
  },
  {
    title: "تاریخ شروع",
    dataIndex: "location",
    render: (location) => location.country,

    width: "15%",
  },
  {
    title: "تاریخ پایان",
    dataIndex: "location",
    render: (location) => location.city,

    width: "15%",
  },
  {
    title: "وضعیت",
    dataIndex: "location",
    filters: [
      {
        text: "فعال",
        value: "active",
      },
      {
        text: "غیر فعال",
        value: "inactive",
      },
      {
        text: "لغو",
        value: "canceled",
      },
      {
        text: "تمدید",
        value: "extend",
      },
    ],
    width: "10%",
    onFilter: (value, record) =>
      record.location.state.startsWith(value as string),
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
      // locale:{ items_per_page: 'gfdtrd' }
    },
  });

  const [expandedKey, setExpandedKey] = useState("");

  // console.log("I am client component how to change me to server component?!")

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
      locale={faIR}
      theme={{
        token: {
          fontFamily: "iran_sans",
        },
      }}
    >
      <Table
        columns={columns}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        rowHoverable={false}
        expandable={{
          expandedRowRender: (record, index) => (
            <Tender first={record.name.first} last={record.name.last} />
          ),
          expandedRowKeys: [expandedKey],
          expandedRowClassName: (record, expandedKey) =>
            expandedKey % 2 === 0 ? "table-row-light" : "table-row-dark",
          onExpand: (record, expanded) =>
            expandedKey === expanded.login.uuid
              ? setExpandedKey("")
              : setExpandedKey(expanded.login.uuid),
          expandRowByClick: true,
        }}
        rowKey={(record) => record.login.uuid}
        style={{ maxWidth: 960, marginRight: "auto", marginLeft: "auto" }}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </ConfigProvider>
  );
};

export default TenderTable;
