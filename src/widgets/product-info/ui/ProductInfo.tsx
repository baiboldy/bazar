import { ProductDetails } from "@features/product-details/ui/ProductDetails.tsx";
import { Box, CircularProgress, Stack } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { useProduct } from "@/entities/product/model/useProduct.ts";
import { BackButton } from "@/shared/ui";
import { BreadCrumbs } from "@features/breadcrumbs";

export function ProductInfo() {
  const { id } = useParams();
  const { currentProduct, isPending } = useProduct(Number(id));
  const navigate = useNavigate();

  if (isPending || !currentProduct) {
    return <CircularProgress />;
  }

  function onBack() {
    navigate(-1);
  }

  return (
    <Box>
      <Stack direction="row" alignItems="center" gap={1}>
        <BackButton onBack={onBack} />
        <BreadCrumbs categories={currentProduct.categories} />
      </Stack>
      <ProductDetails product={currentProduct!} />
    </Box>
  );
}
