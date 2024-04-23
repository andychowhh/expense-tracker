import { guestCategoriesOverview } from "@/constants/guestData";
import { isGuest } from "@/utils";
import axios from "@/app/api/axios";
import moment from "moment";
import React from "react";
import { CATEGORIES } from "@/constants";
import Image from "next/image";
import { CategoryOverviewResponseData } from "@/types";

export async function CategoryDetailsTable({
  dateRange = moment().format("YYYY-MM"),
}: {
  dateRange: string;
}) {
  const categoriesData: CategoryOverviewResponseData[] = isGuest()
    ? guestCategoriesOverview
    : (await axios.get(`/summary/categories?from=${dateRange}&to=${dateRange}`))
        .data;

  const formattedCategoriesData = categoriesData.map(
    ({ _id, totalAmount, count }) => {
      const category = CATEGORIES.find(({ value }) => value === _id)!;
      return {
        _id,
        totalAmount,
        count,
        label: category.label,
        iconUrl: category.avatar,
      };
    }
  );

  return (
    <section className="antialiased bg-gray-100 text-gray-600 h-full">
      <div className="flex flex-col h-full">
        <div className="w-full h-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-300">
            <h2 className="font-semibold text-gray-800">Categories Details</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Category</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Number of transactions
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Amount</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  {formattedCategoriesData.map(
                    ({ _id, label, count, iconUrl, totalAmount }) => (
                      <tr key={_id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <Image
                                src={iconUrl}
                                alt={`${label} Image`}
                                width={35}
                                height={35}
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {label}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left text-base">{count}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-base">
                            ${totalAmount}
                          </div>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
