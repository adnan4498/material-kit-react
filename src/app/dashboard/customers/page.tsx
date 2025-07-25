import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { CustomersFilters } from '@/components/dashboard/customer/customers-filters';
import { CustomersTable } from '@/components/dashboard/customer/customers-table';
import type { Customer } from '@/components/dashboard/customer/customers-table';

export const metadata = { title: `Customers | Dashboard | ${config.site.name}` } satisfies Metadata;

const customers = [
  {
    id: 'USR-010',
    name: 'Adnan',
    avatar: '/assets/avatar-10.png',
    email: 'adnan@gmail.com',
    phone: '908-691-3242',
    address: { city: 'karachi', country: 'karachi', state: 'karachi', street: 'karachi' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-009',
    name: 'Hibban',
    avatar: '/assets/avatar-10.png',
    email: 'hibban@gmail.com',
    phone: '415-907-2647',
    address: { city: 'karachi', country: 'karachi', state: 'karachi', street: 'karachi' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-008',
    name: 'Faham',
    avatar: '/assets/avatar-10.png',
    email: 'FAHAM@123.COM',
    phone: '770-635-2682',
    address: { city: 'karachi', country: 'karachi', state: 'karachi', street: 'karachi' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'USR-007',
    name: 'Adnan',
    avatar: '/assets/avatar-10.png',
    email: 'FAHAM@123.COM',
    phone: '801-301-7894',
    address: { city: 'karachi', country: 'karachi', state: 'karachi', street: 'karachi' },
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies Customer[];

export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(customers, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">Infinitum Employees</Typography>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <CustomersFilters />
      <CustomersTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Customer[], page: number, rowsPerPage: number): Customer[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
