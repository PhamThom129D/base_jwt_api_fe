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
import { useTheme } from '../../../contexts/ThemeContext';
import { IMAGE_BASE_URL } from '../../../constants/config';

function ProductTable({ data, onAdd, onEdit, onDelete }) {
  const { darkMode } = useTheme();

  const columns = [
    { accessorKey: 'id', header: 'Mã' },

{
  accessorKey: 'imageUrl',
  header: 'Ảnh',
  Cell: ({ row }) => {
    const imageFileName = row.original.imageUrl; // tên file ảnh, ví dụ: "product1.jpg"
    const imageUrl = `${IMAGE_BASE_URL}${imageFileName}`;
    return (
      <img
  src={imageUrl}
  alt="product"
  style={{
    width: 50,
    height: 50,
    borderRadius: 8,
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
  }}
  onError={(e) => {
    if (!e.target.src.includes('no-image.png')) {
      e.target.onerror = null;
      e.target.src = `${IMAGE_BASE_URL}no-image.png`;
    }
  }}
/>

    );
  }
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
            <IconButton color="error" onClick={() => onDelete(row.original)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      )
    }
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 2,
        backgroundColor: darkMode ? '#1e1e1e' : '#fff',
        color: darkMode ? '#eee' : '#000'
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" color={darkMode ? 'white' : 'black'}>
          Danh sách sản phẩm
        </Typography>
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
        muiTableHeadCellProps={{
          sx: {
            backgroundColor: darkMode ? '#2c2c2c' : '#f5f5f5',
            color: darkMode ? '#fff' : '#000'
          }
        }}
        muiTableBodyCellProps={{
          sx: {
            color: darkMode ? '#ddd' : '#000',
            backgroundColor: darkMode ? '#1a1a1a' : '#fff'
          }
        }}
      />
    </Paper>
  );
}

export default ProductTable;
