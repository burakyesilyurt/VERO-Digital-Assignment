import { useState } from "react";
import "./Table.css";

export const Table = ({body}) =>{
  const [search,setSearch] = useState("");
  const filterData = body.filter(
    items => items.some(item => item.toString().toLowerCase()
    .includes(search.toLowerCase()))
  )
  return (
    <>
    <div className="my-6">
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." className="h-8 border rounded text-sm px-4 w-full outline-none"/>
    </div>
    <div className="w-full border rounded p-2">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2">task</th>
            <th className="p-2">title</th>
            <th className="p-2">description</th>
            <th className="p-2">colorCode</th>
          </tr>
        </thead>
        <tbody>
          
          {filterData.map(([task,title,description,colorCode],key) => (
            <tr className="group" key={key}>
               <td className="p-2 text-sm group-hover:bg-gray-700">{task}</td>
               <td className="p-2 text-sm group-hover:bg-gray-700">{title}</td>
               <td className="p-2 text-sm group-hover:bg-gray-700">{description}</td>
               <td className="p-2 text-sm group-hover:bg-gray-700" style={{backgroundColor:colorCode}}>{colorCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>

  )
}