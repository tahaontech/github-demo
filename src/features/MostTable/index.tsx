import React from 'react'
import SortableTabl from "./components/SortableTabl"

type Data = {
    id: number;
    html_url: string;
    name: string;
    forks_count: number;
    stargazers_count: number;
    created_at: string;
    updated_at: string;
}[]

export default function MostTable({ data }: {data : Data; }) {
  return (
    <SortableTabl data={data} />
  )
}
