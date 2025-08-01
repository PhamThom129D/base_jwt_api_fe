import React, { useEffect, useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('Tên sản phẩm là bắt buộc'),
  price: yup.number().typeError('Giá phải là số').positive().required('Giá là bắt buộc'),
  quantity: yup.number().typeError('Tồn kho phải là số').min(0).required('Tồn kho là bắt buộc'),
  description: yup.string().required('Mô tả là bắt buộc'),
  imageFile: yup.mixed().required('Vui lòng chọn ảnh'),
});

function ProductForm({ onSubmit, initialData }) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData || {}
  });

  const [imagePreview, setImagePreview] = useState(initialData?.imageUrl || null);

  const imageFile = watch('imageFile');

  useEffect(() => {
    // Gán dữ liệu ban đầu nếu có
    if (initialData) {
      for (const key in initialData) {
        setValue(key, initialData[key]);
      }
    }
  }, [initialData, setValue]);

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      return () => {
        URL.revokeObjectURL(previewUrl);
      };
    }
  }, [imageFile]);

  return (
    <Card elevation={6} sx={{ borderRadius: 3, p: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom color="primary">
          {initialData ? '📝 Cập nhật sản phẩm' : '➕ Thêm sản phẩm mới'}
        </Typography>

     <form
  onSubmit={handleSubmit((data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('price', data.price);
    formData.append('quantity', data.quantity);
    formData.append('description', data.description);

    if (data.imageFile && data.imageFile[0]) {
      formData.append('image', data.imageFile[0]);
    }

    onSubmit(formData); // Truyền formData lên ListProductPage
  })}
  encType="multipart/form-data"
>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tên sản phẩm"
                fullWidth
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <TextField
                label="Giá (VNĐ)"
                fullWidth
                {...register('price')}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
            </Grid>

            <Grid item xs={6} sm={3}>
              <TextField
                label="Tồn kho"
                fullWidth
                {...register('quantity')}
                error={!!errors.quantity}
                helperText={errors.quantity?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Mô tả"
                fullWidth
                multiline
                rows={3}
                {...register('description')}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{ height: '56px' }}
              >
                📷 Chọn ảnh
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  {...register('imageFile')}
                />
              </Button>
              {errors.imageFile && (
                <Typography color="error" variant="body2" mt={1}>
                  {errors.imageFile.message}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6} textAlign="center">
              {imagePreview && (
                <Box>
                  <Avatar
                    variant="rounded"
                    src={imagePreview}
                    sx={{ width: 100, height: 100, mx: 'auto' }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    Xem trước ảnh
                  </Typography>
                </Box>
              )}
            </Grid>

            <Grid item xs={12} textAlign="right">
              <Button type="submit" variant="contained" size="large">
                {initialData ? '💾 Cập nhật' : '✅ Thêm mới'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export default ProductForm;
