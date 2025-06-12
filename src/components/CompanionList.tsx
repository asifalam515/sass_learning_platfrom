import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { subjects } from "@/constants";
interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}
const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="font-bold text-3xl ">Recent sessions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => (
            <TableRow key={companion.id}>
              <TableCell>
                <Link href={`/companions/${companion.id}`}>
                  <div className="flex items-center gap-2">
                    <div className="size-[72px] flex itmes-center justify-center rounded-lg max-md:hidden ">
                      <Image
                        src={`src/public/icons/${companion.subject}.svg`}
                        alt="image"
                        width={35}
                        height={35}
                      ></Image>
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="font-bold">{companion.name}</p>
                      <p className="text-lg"> {companion.topic} </p>
                    </div>
                  </div>
                  {companion.subject}
                </Link>
              </TableCell>
              <TableCell>
                <div className="subject-badge w-fit">{companion.subject}</div>
                <div
                  className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                  style={{}}
                ></div>
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
