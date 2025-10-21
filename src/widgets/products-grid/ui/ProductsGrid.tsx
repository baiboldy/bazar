import { Container } from "@mui/material";
import { Section } from "@/shared/ui/layout";
import { ProductList } from "@features/product-list/ui/ProductList.tsx";

export function ProductsGrid() {
  function onShare() {}
  function onFavorite() {}

  return (
    <Container maxWidth="xl" sx={{ mt: 1 }}>
      <main>
        <Section title="Список продуктов">
          <ProductList onShare={onShare} onFavorite={onFavorite} />
        </Section>
      </main>
    </Container>
  );
}
