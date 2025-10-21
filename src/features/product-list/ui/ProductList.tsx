import { Grid, CircularProgress } from "@mui/material";
import { useProducts } from "@/entities/product/model/useProducts.ts";
import { ProductCard } from "@/entities/product/ui";

type Props = {
  onShare: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMore: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBucket: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function ProductList(props: Props) {
  const { products, isPending } = useProducts();

  if (isPending) {
    return <CircularProgress />;
  }
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid
          size={2}
          key={product.id}
          sx={{ minHeight: "100%", height: "auto" }}
        >
          <ProductCard key={product.id} product={product} {...props} />
        </Grid>
      ))}
    </Grid>
  );
}
