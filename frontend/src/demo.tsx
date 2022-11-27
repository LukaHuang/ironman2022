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
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        rows={result}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[50]}
        autoHeight={true}
        disableColumnSelector={false}
        disableExtendRowFullWidth={false}

      />
    </div>
  );
}


