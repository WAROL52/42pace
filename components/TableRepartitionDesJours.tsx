"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { milestones, mois } from "@/lib/pace";

export type TableRepartitionDesJoursProps = {};

export function TableRepartitionDesJours({}: TableRepartitionDesJoursProps) {
  return <TableDemo />;
}

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Milestone</TableHead>
          {mois.map((m) => (
            <TableHead key={m}>Pace {m}</TableHead>
          ))}
          <TableHead className="text-right">*</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {milestones.map((m) => (
          <TableRow key={m.milestone}>
            <TableCell className="font-medium">{m.milestone}</TableCell>
            {m.repartitionDesJours.map((jour) => (
              <TableCell key={jour}>{jour}</TableCell>
            ))}
            <TableCell className="text-right"> </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          {mois.map((m, index) => (
            <TableCell key={index}>
              {milestones.reduce(
                (acc, curr) => acc + curr.repartitionDesJours[index],
                0
              )}
            </TableCell>
          ))}
          <TableCell className="text-right"> </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
