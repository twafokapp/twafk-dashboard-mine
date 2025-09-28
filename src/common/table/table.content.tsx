import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';

type MyTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  isLoading?: boolean;
  loadingSkeletonsNumber?: number;
  paginationRef?: (node?: Element | null) => void;
  onRowClick?: (row: T) => void;
};

export function MyTable<T>({
  data,
  columns,
  isLoading,
  loadingSkeletonsNumber = 10,
  paginationRef,
  onRowClick,
}: Readonly<MyTableProps<T>>) {
  const table = useReactTable<T>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className='w-full overflow-x-auto rounded-t-[12px]'>
      <table className=' min-w-full divide-y divide-gray-200 mb-[1rem]'>
        <thead className='bg-gray-50 hover:bg-zinc-200 h-[70px] '>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className=' '>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className='bg-header-table px-6 py-6 text-center text-xs uppercase tracking-wider text-nowrap'
                >
                  <div className='text-black font-light text-[16px]'>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className='bg-white divide-y divide-gray-200 text-center'>
          {isLoading &&
            Array.from({ length: loadingSkeletonsNumber }).map((_, rowIndex) => {
              const rowKey = `skeleton-row-${rowIndex}`;
              return (
                <tr key={rowKey} className='hover:bg-gray-50 h-20 px-6 py-6 '>
                  {/* Render a skeleton cell for each column */}

                  {columns.map((_, colIndex) => {
                    const columnKey = `skeleton-col-${colIndex}`;
                    return (
                      <td key={`${rowKey}-${columnKey}`} className='px-6 py-4'>
                        <div className='h-4 bg-gray-200 rounded-full animate-pulse'></div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}

          {!isLoading && data?.length === 0 ? (
            // FIX: "No data" message is now inside a valid table row and cell structure.
            <tr>
              <td colSpan={columns.length} className='text-center py-10 text-gray-500'>
                No data
              </td>
            </tr>
          ) : (
            !isLoading &&
            table.getRowModel().rows.map(row => (
              <tr
                key={row.id}
                className='hover:bg-gray-50'
                onClick={() => onRowClick && onRowClick?.(row.original)}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className='px-6 py-4 text-[16px]'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div ref={paginationRef} />
    </div>
  );
}
