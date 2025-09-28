import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type MyTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  paginationRef?: (node?: Element | null) => void;
};

export function MyTable<T>({ data, columns }: Readonly<MyTableProps<T>>) {
  const table = useReactTable<T>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className='overflow-x-auto'>
      <table className='min-w-full divide-y divide-gray-200 '>
        <thead className='bg-gray-50 hover:bg-zinc-200 h-[70px] '>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className=' '>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className='bg-header-table px-6 py-6 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <div className='text-black'>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className='bg-white divide-y divide-gray-200 text-center'>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className='hover:bg-gray-50 '>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className='px-6 py-4 '>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
