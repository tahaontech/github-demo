// https://api.github.com/users/defunkt/repos


import axios from "axios";
import { useState, useEffect } from "react";
import SortableTable from "./components/SortableTable";


type Data = {
  id: number;
  name: string;
  forks_count: number;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
}[]


type Props = {
  url: string;
};
export default function RepoTable({ url }: Props) {
  const [tableData, setTableData] = useState<Data>();

  const getData = async (aurl: string) => {
    const { data } = await axios.get(aurl);
    const newData: Data = data.map((d: any) => {
      return {
        id: d.id,
        name: d.name,
        forks_count: d.forks_count,
        stargazers_count: d.stargazers_count,
        created_at: d.created_at,
        updated_at: d.updated_at,
      };
    });
    setTableData(newData);
  };

  useEffect(() => {
    getData(url);
  }, [tableData, url]);
  return (<>
      {(tableData) && (<SortableTable data={tableData} />)}
    </>);
}
