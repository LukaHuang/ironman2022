import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'tag', headerName: '分組', width: 130 },
  {
    field: 'page_view',
    type: 'number',
    headerName: '瀏覽數',
  },
  {
    field: 'follower_number',
    type: 'number',
    headerName: '追蹤數',
    width: 90
  },
  // { field: 'id', headerName: 'id', width: 70 },
  { field: 'title', headerName: 'Topic', width: 200 },
  { field: 'author_name', headerName: 'Name', width: 120 },
  { field: 'description', headerName: 'Description', width: 1000 },
  
  {
    field: 'link',
    type: 'text',
    headerName: 'Link',
    width: 420,
  },
  
  
];

interface IIronman {
  id: number;
  author_name: string;
  description: string;
  follower_number: number; 
  link: string;
  page_view: number;
  progress: number;
  tag: string;
  title: string;
}

const useFetch = () => {
  const [data, setData] = useState<IIronman[]>([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://winter-darkness-4385.fly.dev/ironman2022');
      const json = await response.json();console.log(json['ironman_list'])
      setData(json['ironman_list'])
    }
    fetchData();
  }, []);

  return data;
};

export default function DataTable() {
  const result = useFetch();
  const result_sort_by_pageview = result.sort((a,b) => {
    // console.log(a.page_view)
    return b.page_view - a.page_view
  })
  
  return (
    <div style={{ width: '80%', margin: "auto" }}>
      <h1>2022 iT邦幫忙鐵人賽非官方排行榜</h1>
      <h2>Modern Web</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Modern Web")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>Software Development</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Software Development")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>Mobile Development</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Mobile Development")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>Security</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Security")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>影片教學</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "影片教學")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>DevOps</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "DevOps")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>Agile</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Agile")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>Web 3</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "Web 3")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>IT管理</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "IT管理")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
      <h2>自我挑戰組</h2>
      <DataGrid
        rows={result_sort_by_pageview.filter(ironman => ironman.tag === "自我挑戰組")}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={true}
        disableExtendRowFullWidth={false}
      />
    </div>
  );
}


