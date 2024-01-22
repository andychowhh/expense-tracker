"use client";

import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

interface FormInput {
  date: Date;
}

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export function ExpenseStackedList() {
  const [currentDate, setCurrentDate] = useState<Date | null>(new Date());
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      date: new Date(),
    },
  });

  return (
    <div className="sm:border sm:border-1 sm:mt-4 sm:max-w-md sm:m-auto md:max-w-xl lg:max-w-3xl">
      <div className="flex justify-between items-center border-b py-2 sm:px-4">
        <div className="invisible">CA$0</div>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              preventOpenOnFocus={true}
              withPortal={true}
              dateFormat="d MMM yyyy"
              maxDate={new Date()}
              onChange={(date) => field.onChange(date)}
              onKeyDown={(e) => {
                e.preventDefault();
              }}
              customInput={
                <div className="cursor-pointer rounded-md bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {moment(field.value).isSame(moment(), "day")
                    ? "Today"
                    : moment(field.value).format("d MMM yyyy")}
                </div>
              }
            />
          )}
        />
        <div>CA$0</div>
      </div>
      <ul role="list" className="divide-y divide-gray-100 sm:px-4">
        {people.map((person) => (
          <li
            key={person.email}
            className="flex justify-between items-center gap-x-6 py-5"
          >
            <div className="flex items-center min-w-0 gap-x-4">
              <div className="h-12 w-12 relative flex-none">
                <Image
                  className="rounded-full bg-gray-50"
                  src={person.imageUrl}
                  alt=""
                  fill={true}
                />
              </div>
              <div className="min-w-0 flex-auto">123</div>
            </div>
            <div className="sm:flex sm:flex-col">
              <p className="text-sm leading-6 text-gray-900">CA$1.62</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
