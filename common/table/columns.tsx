// Define the type for our data

import { createColumnHelper } from '@tanstack/react-table';

const columnsHelper = createColumnHelper();

export const Columns = [
  columnsHelper.accessor('avatar', {
    cell: info => info.getValue(),
    header: 'clients.name',

    // header: () => (<span className='flex items-center'>
    //   <User className='mr-2' size={16} /> Avatar
    // </span>),
  }),

  columnsHelper.accessor('person_name', {
    cell: info => info.getValue(),
    // header: () => <span className='flex items-center'>
    //   <User className='mr-2' size={16} /> Person Name
    // </span>,
  }),

  columnsHelper.accessor('e_mail', {
    cell: info => info.getValue(),
    // header: () => <span className='flex items-center'>
    //   <Mail className='mr-2' size={16} /> Email
    // </span>,
  }),

  columnsHelper.accessor('citys', {
    // header: () => (<span className='flex items-center'>
    //   <Phone className='mr-2' size={16} /> Phone
    // </span>
    // ),
    cell: info => info.getValue(),
  }),
  columnsHelper.accessor('pay_method', {
    // header: () => (<span className='flex items-center'>
    //   <Citrus className='mr-2' size={16} /> Pay Method
    // </span>
    // ),
    cell: info => info.getValue(),
  }),
  columnsHelper.accessor('city', {
    // header: () => (<span className='flex items-center'>
    //   <Home className='mr-2' size={16} /> City
    // </span>
    // ),
    cell: info => info.getValue(),
  }),
  columnsHelper.accessor('status', {
    // header: () => (<span className='flex items-center'>
    //   <Phone className='mr-2' size={16} /> Status
    // </span>
    // ),
    cell: info => info.getValue(),
  }),
  columnsHelper.accessor('list_of_requests', {
    // header: () => (<span className='flex items-center'>
    //   <Phone className='mr-2' size={16} /> List Of Requests
    // </span>
    // ),
    cell: info => info.getValue(),
  }),
];
