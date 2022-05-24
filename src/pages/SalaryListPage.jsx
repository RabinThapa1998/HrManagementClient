import React from "react";
import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

const SalaryListPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "Salary-Details",
    () => request({ url: `/admins/salaries/salariesList`, method: "get" }),
    {}
  );

  if (isLoading) {
    return <div className="text-3xl">loading...</div>;
  }
  if (isError) {
    return <p>error...</p>;
  }

  return (
    <div className="w-full px-10 py-5 relative">
      <h2 className="text-2xl font-semibold text-sidebar absolute top-5">
        Salary List
      </h2>
      <div class="relative overflow-x-auto shadow  mt-28">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  overflow-hidden">
          <thead class="text-base text-gray-700 uppercase bg-green-300 dark:bg-gray-700 dark:text-gray-400 h-14 text-center">
            <tr>
              <th scope="col" class="px-6 py-3">
                User Id
              </th>
              <th scope="col" class="px-6 py-3">
                First Name
              </th>
              <th scope="col" class="px-6 py-3">
                Last Name
              </th>
              <th scope="col" class="px-6 py-3">
                Salary Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.data.map((each) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-base text-center">
                <td class="px-6 py-4">{each.userId}</td>
                <td class="px-6 py-4">{each.firstName}</td>
                <td class="px-6 py-4">{each.lastName}</td>
                <td class="px-6 py-4">{each.salaryAmount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryListPage;
