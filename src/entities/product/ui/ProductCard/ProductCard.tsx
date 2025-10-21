import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import type { Product } from "@/entities/product/model/types.ts";

type Props = {
  product: Product;
  onShare: () => void;
  onFavorite: () => void;
};

export function ProductCard({ product, onShare, onFavorite }: Props) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        title={product.title}
        subheader={product.price}
        action={
          <>
            <IconButton
              aria-label="add to favorites"
              onClick={onFavorite}
              size="small"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={onShare} size="small">
              <ShareIcon />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ flexDirection: "column", gap: 1 }} disableSpacing>
        <Button variant="contained" fullWidth>
          Подробнее
        </Button>
        <Button color="secondary" variant="contained" fullWidth>
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}
