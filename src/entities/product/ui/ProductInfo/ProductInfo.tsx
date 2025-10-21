import type { Product } from "@/entities/product/model/types.ts";
import { Box, Typography } from "@mui/material";

type Props = {
  product: Product;
};

export function ProductInfo({ product }: Props) {
  return (
    <Box>
      <Typography component="h1" sx={{ fontSize: 19 }}>
        {product.title}
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        {product.description}
      </Typography>
    </Box>
  );
}
