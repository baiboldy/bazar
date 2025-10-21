import { Section } from "@/shared/ui/layout";
import { ProductList } from "@features/product-list/ui/ProductList.tsx";
import { useNavigate } from "react-router-dom";

export function ProductsGrid() {
  const navigate = useNavigate();

  function onShare(e: React.MouseEvent) {
    console.log(e);
  }
  function onFavorite(e: React.MouseEvent) {
    console.log(e);
  }
  function onMore(e: React.MouseEvent<HTMLButtonElement>) {
    const { id } = e.currentTarget.dataset;
    if (id) {
      navigate(`catalog/${id}`);
    }
  }
  function onBucket(e: React.MouseEvent) {
    console.log(e);
  }

  return (
    <main>
      <Section title="Список продуктов">
        <ProductList
          onShare={onShare}
          onFavorite={onFavorite}
          onMore={onMore}
          onBucket={onBucket}
        />
      </Section>
    </main>
  );
}
