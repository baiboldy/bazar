import type { Category } from "@/entities/category/model/types.ts";

export const categories: Category[] = [
  // Уровень 0
  { id: 1, name: "Продукты питания", slug: "food", parentId: null, level: 0 },
  { id: 2, name: "Электроника", slug: "electronics", parentId: null, level: 0 },
  { id: 3, name: "Одежда", slug: "clothing", parentId: null, level: 0 },
  { id: 4, name: "Книги", slug: "books", parentId: null, level: 0 },

  // Уровень 1 - Продукты питания
  { id: 5, name: "Фрукты", slug: "fruits", parentId: 1, level: 1 },
  { id: 6, name: "Овощи", slug: "vegetables", parentId: 1, level: 1 },
  { id: 7, name: "Молочные продукты", slug: "dairy", parentId: 1, level: 1 },
  { id: 8, name: "Мясо", slug: "meat", parentId: 1, level: 1 },

  // Уровень 1 - Электроника
  { id: 9, name: "Смартфоны", slug: "smartphones", parentId: 2, level: 1 },
  { id: 10, name: "Ноутбуки", slug: "laptops", parentId: 2, level: 1 },
  { id: 11, name: "Телевизоры", slug: "tvs", parentId: 2, level: 1 },
  { id: 12, name: "Наушники", slug: "headphones", parentId: 2, level: 1 },

  // Уровень 1 - Одежда
  { id: 13, name: "Мужская", slug: "mens", parentId: 3, level: 1 },
  { id: 14, name: "Женская", slug: "womens", parentId: 3, level: 1 },
  { id: 15, name: "Детская", slug: "kids", parentId: 3, level: 1 },

  // Уровень 2 - Подкатегории
  { id: 16, name: "Яблоки", slug: "apples", parentId: 5, level: 2 },
  { id: 17, name: "Цитрусовые", slug: "citrus", parentId: 5, level: 2 },
  { id: 18, name: "Ягоды", slug: "berries", parentId: 5, level: 2 },
  { id: 19, name: "Косточковые", slug: "stone-fruits", parentId: 5, level: 2 },

  { id: 20, name: "Помидоры", slug: "tomatoes", parentId: 6, level: 2 },
  { id: 21, name: "Огурцы", slug: "cucumbers", parentId: 6, level: 2 },
  { id: 22, name: "Картофель", slug: "potatoes", parentId: 6, level: 2 },
  { id: 23, name: "Зелень", slug: "greens", parentId: 6, level: 2 },

  { id: 24, name: "iOS", slug: "ios", parentId: 9, level: 2 },
  { id: 25, name: "Android", slug: "android", parentId: 9, level: 2 },

  { id: 26, name: "Игровые", slug: "gaming", parentId: 10, level: 2 },
  { id: 27, name: "Ультрабуки", slug: "ultrabooks", parentId: 10, level: 2 },
];
