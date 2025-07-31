import React from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_VI } from 'material-react-table/locales/vi';
import {
  Button,
  IconButton,
  Box,
  Tooltip,
  Typography,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/EditOutlined';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function ProductTable({ data, onAdd, onEdit, onDelete }) {
  const columns = [
    { accessorKey: 'id', header: 'Mã' },
    {
      accessorKey: 'imageUrl',
      header: 'Ảnh',
      Cell: ({ cell }) => (
        <img
          src={cell.getValue()}
          alt="product"
          style={{
            width: 50,
            height: 50,
            borderRadius: 8,
            objectFit: 'cover',
            boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
          }}
        />
      )
    },
    { accessorKey: 'name', header: 'Tên sản phẩm' },
    { accessorKey: 'description', header: 'Mô tả' },
    {
      accessorKey: 'price',
      header: 'Giá (VNĐ)',
      Cell: ({ cell }) =>
        Number(cell.getValue()).toLocaleString('vi-VN', {
          style: 'currency',
          currency: 'VND'
        })
    },
    { accessorKey: 'quantity', header: 'Tồn kho' },
    {
      accessorKey: 'owner.username',
      header: 'Người tạo',
      Cell: ({ cell }) => <strong>{cell.getValue()}</strong>
    },
    {
      header: 'Hành động',
      size: 100,
      Cell: ({ row }) => (
        <Box>
          <Tooltip title="Chỉnh sửa">
            <IconButton color="primary" onClick={() => onEdit(row.original)}>
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Xóa">
            <IconButton color="error" onClick={() => onDelete(row.original.id)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">Danh sách sản phẩm</Typography>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddCircleOutlineIcon />}
          onClick={onAdd}
        >
          Thêm mới
        </Button>
      </Box>

      <MaterialReactTable
        columns={columns}
        data={data}
        localization={MRT_Localization_VI}
        enableColumnFilters
        enableGlobalFilter
        enableSorting
        enablePagination
        initialState={{
          pagination: { pageSize: 5 },
          showGlobalFilter: true,
        }}
      />
    </Paper>
  );
}

export default ProductTable;
