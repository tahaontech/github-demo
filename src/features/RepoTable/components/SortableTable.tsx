import { MouseEventHandler, useCallback, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

type Data = {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
}[];

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  if (reverse) {
    return sortedData.reverse();
  }

  return sortedData;
}

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder;
  columnKey: SortKeys;
  sortKey: SortKeys;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button onClick={onClick}>
      {(sortKey === columnKey && sortOrder === "desc") ? (<ArrowCircleDownIcon />
      ): (<ArrowCircleUpIcon />)}
    </Button>
  );
}

function SortableTable({ data }: { data: Data }) {
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "forks_count", label: "forks" },
    { key: "stargazers_count", label: "stars" },
    { key: "created_at", label: "created time" },
    { key: "updated_at", label: "last update" },
  ];

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

    setSortKey(key);
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader={true} sx={{ minWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((row) => {
              return (
                <TableCell key={row.key}>
                  {row.label}
                  <SortButton
                    columnKey={row.key}
                    onClick={() => changeSort(row.key)}
                    {...{
                      sortOrder,
                      sortKey,
                    }}
                  />
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedData().map((d) => {
            return (
              <TableRow key={d.id}>
                <TableCell>{d.id}</TableCell>
                <TableCell>{d.name}</TableCell>
                <TableCell>{d.forks_count}</TableCell>
                <TableCell>{d.stargazers_count}</TableCell>
                <TableCell>{d.created_at}</TableCell>
                <TableCell>{d.updated_at}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SortableTable;
