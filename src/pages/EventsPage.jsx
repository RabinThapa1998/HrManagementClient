import React from "react";
import { useQuery } from "react-query";
import { request } from "../../utils/axios-utils";

const SalaryListPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    "Salary-Details",
    () => request({ url: `/admins/calendars/events`, method: "get" }),
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
        Event List
      </h2>
      <div class="relative overflow-x-auto shadow  mt-28">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  overflow-hidden">
          <thead class="text-base text-gray-700 uppercase bg-green-300 dark:bg-gray-700 dark:text-gray-400 h-14 text-center">
            <tr>
              <th scope="col" class="px-6 py-3">
                Event Name
              </th>
              <th scope="col" class="px-6 py-3">
                Event Type
              </th>
              <th scope="col" class="px-6 py-3">
                Start Date
              </th>
              <th scope="col" class="px-6 py-3">
                End Date
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>

              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.data.map((each) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-base text-center">
                <td class="px-6 py-4">{each.name}</td>
                <td class="px-6 py-4">{each.eventType}</td>
                <td class="px-6 py-4">{each.startAt}</td>
                <td class="px-6 py-4">{each.endAt}</td>
                <td class="px-6 py-4">{each.description}</td>
                <td class="px-6 py-4"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryListPage;
