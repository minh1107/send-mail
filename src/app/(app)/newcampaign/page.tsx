'use client'
import { TextField } from '@mui/material'
import React from 'react'
import readXlsxFile from 'read-excel-file'
import * as XLSX from 'xlsx';
type Props = {}

const page = (props: Props) => {
    const handleImportEmail = async(e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('reading input file:');
        if(e.target.files) {
            const file = e.target.files[0];
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, {
                header: 1,
                defval: "",
            });
        
            //console.log(e.target.files[0]);
            //console.log(workbook);
            console.log(jsonData);
        }
    }
  return (
    <div className='mx-[10%] bg-white mt-[5%] py-5 shadow-md rounded-md'>
        <div className='font-bold text-xl py-4 px-10'>Campaign settings</div>
        <hr />
        <div className='flex items-center gap-4 px-10 py-6'>
            <p className='mr-[8%]'>Sender email</p>
            <div className='flex items-center gap-4'>
                <TextField className='w-[400px]' size='small'/><span>@gmail.com</span>
            </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 px-10 py-6'>
            <p className='mr-[8%]'>Sender email</p>
            <div className='flex items-center gap-4'>
                <TextField className='w-[400px]' size='small'/>
            </div>
        </div>
        <hr />
        <div className='flex items-center gap-4 px-10 py-6'>
            <p className='mr-[8%]'>Nhập file excel chứa danh sách email cần gửi: </p>
            <input type="file" onChange={e => handleImportEmail(e)}/>
        </div>
    </div>
  )
}

export default page