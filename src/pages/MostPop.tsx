import React, { useState, useEffect, ChangeEvent } from "react";

import { Box, TextField, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";


import MostTable from "../features/MostTable";


type row = {
  id: number;
  html_url: string;
  name: string;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
};
type Data = row[];

const MostPop = () => {
  const [tableData, setTableData] = useState<Data>();
  const [filtered, setFiltered] = useState<Data>();
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value.length > 2) {
      if (tableData !== undefined) {
        const result = tableData?.filter((d: row) => {
          return d.name.includes(e.target.value);
        });
        setFiltered(result);
      } else {
        setFiltered(undefined);
      }
    } else {
      setFiltered(undefined);
    }
  };



  async function getData(url: string) {
    try {
      const { data } = await axios.get(url);
      const datas: Data = data.items.map((d: any) => {
        return {
          id: d.id,
          html_url: d.html_url,
          name: d.name,
          forks_count: d.forks_count,
          stargazers_count: d.stargazers_count,
          created_at: d.created_at,
          updated_at: d.updated_at,
        };
      });
      setTableData(datas);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData(
      "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=10"
    );
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ color: "whitesmoke", margin: "20px" }}>
        Most Popular useers
      </Typography>
      <TextField
        label="search"
        value={value}
        sx={{ marginBottom: "20px"}}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          handleChange(e)
        }
      />
      {tableData ? (
        filtered !== undefined ? (
          <MostTable data={filtered} />
        ) : (
          <MostTable data={tableData} />
        )
      ) : (
        <CircularProgress sx={{ marginTop: "20px"}} />
      )}
    </Box>
  );
};

export default MostPop;
