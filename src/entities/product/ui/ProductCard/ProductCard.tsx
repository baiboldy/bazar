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
import React from "react";

type Props = {
  product: Product;
  onShare: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMore: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBucket: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function ProductCard({
  product,
  onShare,
  onFavorite,
  onMore,
  onBucket,
}: Props) {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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
        <Button
          variant="contained"
          fullWidth
          onClick={onMore}
          data-id={product.id}
        >
          Подробнее
        </Button>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          onClick={onBucket}
        >
          В корзину
        </Button>
      </CardActions>
    </Card>
  );
}
