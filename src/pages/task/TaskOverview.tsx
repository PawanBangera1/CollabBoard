"use client";

import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TbEye } from "react-icons/tb";

import DataTable from "@/components/ui/data-table";

export type Payment = {
  id: string;
  name?: string;
  description?: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const data: Payment[] = [
  {
    id: "1",
    name: "Task 1",
    description: "Description for Task 1",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "2",
    name: "Task 2",
    description: "Description for Task 2",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "3",
    name: "Task 3",
    description: "Description for Task 3",
    amount: 837,
    status: "success",
    email: "Monserrat44@example.com",
  },
  {
    id: "4",
    name: "Task 4",
    description: "Description for Task 4",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "5",
    name: "Task 5",
    description: "Description for Task 5",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

export const columns = [
  {
    id: "select",
    header: ({ table }: any) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }: any) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }: any) => (
      <div className="font-medium">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }: any) => <div className="">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }: any) => {
      const status = row.getValue("status");

      if (status === "success") {
        return <div className="text-green-600 capitalize">{status}</div>;
      }

      if (status === "failed") {
        return <div className="text-red-600 capitalize">{status}</div>;
      }

      return <div className="capitalize">{status}</div>;
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }: any) => (
      <div className="">{row.getValue("description")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }: any) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }: any) => (
      <div className="lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right">Actions</div>,
    enableHiding: false,
    cell: () => {
      return (
        <div className="flex items-center justify-center">
          <TbEye size={18} className="ml-auto text-gray-600 cursor-pointer" />
        </div>
      );
    },
  },
];

export function TaskOverview() {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold mb-4">Task Overview</h2>
      <div className="mb-4 ">
        <DataTable columns={columns as any} data={data} />
      </div>
    </div>
  );
}

export default TaskOverview;
