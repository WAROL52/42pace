"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { milestones, mois } from "@/lib/pace";

export type TableCumulatifAchaqueEtapeProps = {};

export function TableCumulatifAchaqueEtape({}: TableCumulatifAchaqueEtapeProps) {
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
            {m.cumulatifAchaqueEtape.map((jour) => (
              <TableCell key={jour}>{jour}</TableCell>
            ))}
            <TableCell className="text-right"> </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
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
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
