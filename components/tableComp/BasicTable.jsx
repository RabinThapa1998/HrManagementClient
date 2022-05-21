import React, { useMemo, useState } from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./Columns";
import "../../src/table.css";

import {
  useTable,
  usePagination,
} from "react-table/dist/react-table.development";

const BasicTable = () => {
  const [year, setYear] = useState("2078/79");
  const [district, setDistrict] = useState("All");

  let columns = useMemo(
    () => [
      { Header: "P.ID", accessor: "id" },
      { Header: "Reg No.", accessor: "first_name" },
      { Header: "Patient Name", accessor: "last_name" },
      { Header: "Health Facility", accessor: "date_of_birth" },
      { Header: "Entry On", accessor: "country" },
      // { Header: "", accessor: "phone" },
    ],
    []
  );
  let data = useMemo(() => MOCK_DATA, []);
  //   const tableInstance = useTable({
  //     columns: columns,
  //     data: data,
  //   });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    setPageSize,
  } = useTable({ columns, data }, usePagination);

  //   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //     tableInstance;

  const { pageIndex, pageSize } = state;
  return (
    <div className=" border-2 border-red-400">
      <div className="flex justify-start mb-52 mt-3">
        <div className="w-auto bg-tableregister px-3 y-1">
          <small>Registered</small>
          <p className="font-medium text-xl">Patients/Total:13</p>
        </div>
      </div>
      <div className="flex justify-end my-5">
        <button className="bg-red-500 text-white py-2 px-3 text-lg hover:shadow-lg w-40 mr-10">
          Export Data
        </button>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex">
          <div>
            <label for="year" className="font-medium text-lg mx-3">
              Year
            </label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              id="year"
              className="w-40 p-2 rounded-md focus:outline-blue-400 bg-tablebody"
            >
              {["2078/79", "2077/78", "2076/77"].map((each, key) => {
                return (
                  <option key={key} value={each}>
                    {each}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label for="District" className="font-medium text-lg mx-3">
              District
            </label>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              id="District"
              className="w-40 p-2 rounded-md focus:outline-blue-400  bg-tablebody"
            >
              {["Morang", "Jhapa", "Kathmandu"].map((each, key) => {
                return (
                  <option key={key} value={each}>
                    {each}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label for="show" className="font-medium text-lg mx-3">
              Show
            </label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              id="show"
              className="w-24 p-2 rounded-md focus:outline-blue-400 bg-tablebody"
            >
              {[10, 25, 50, 100, 200].map((pageSize) => {
                return (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex justify-end ">
          <div className=" my-auto">
            <p className="text-lg w-20 font-medium text-center ">
              {pageIndex + 1} of {pageOptions.length}
            </p>
          </div>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="bg-green-300 py-2 px-4 rounded-md shadow-md mx-2 text-xl hover:bg-green-500 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="bg-green-300 py-2 px-4 rounded-md shadow-md mx-2 text-xl hover:bg-green-500 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <table {...getTableProps()} className=" w-full table-root">
        <thead className="table-head">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="border text-center">
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="table-body">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="border text-center">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
