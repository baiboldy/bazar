export interface Category {
  id: number;
  name: string;
  slug: string;
  parentId: number | null;
  level: number;
  productCount?: number;
}
