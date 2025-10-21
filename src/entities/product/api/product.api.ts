import type { CreateProduct, Product } from "@/entities/product/model/types.ts";
import { categories } from "@/entities/category/api/category.api.ts";

export const products: Product[] = [
  {
    id: 1,
    title: "Яблоко Голден",
    description: "Сладкие желтые яблоки из Казахстана",
    price: 450,
    category: categories.find((c) => c.id === 16)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 16)!,
    ],
  },
  {
    id: 2,
    title: "Апельсин Валенсия",
    description: "Сочные апельсины из Испании",
    price: 680,
    category: categories.find((c) => c.id === 17)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 17)!,
    ],
  },
  {
    id: 3,
    title: "Клубника свежая",
    description: "Свежая клубника из Турции",
    price: 1200,
    category: categories.find((c) => c.id === 18)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 18)!,
    ],
  },
  {
    id: 4,
    title: "Персик желтый",
    description: "Сочные желтые персики из Узбекистана",
    price: 890,
    category: categories.find((c) => c.id === 19)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 19)!,
    ],
  },
  {
    id: 5,
    title: "Помидоры черри",
    description: "Сладкие помидоры черри",
    price: 550,
    category: categories.find((c) => c.id === 20)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 20)!,
    ],
  },
  {
    id: 6,
    title: "Огурцы тепличные",
    description: "Свежие тепличные огурцы",
    price: 320,
    category: categories.find((c) => c.id === 21)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 21)!,
    ],
  },
  {
    id: 7,
    title: "Картофель молодой",
    description: "Молодой картофель нового урожая",
    price: 280,
    category: categories.find((c) => c.id === 22)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 22)!,
    ],
  },
  {
    id: 8,
    title: "Укроп свежий",
    description: "Свежая зелень укропа",
    price: 150,
    category: categories.find((c) => c.id === 23)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 23)!,
    ],
  },
  {
    id: 9,
    title: "iPhone 15 Pro",
    description: "Новый iPhone с титановым корпусом",
    price: 129900,
    category: categories.find((c) => c.id === 24)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 9)!,
      categories.find((c) => c.id === 24)!,
    ],
  },
  {
    id: 10,
    title: "Samsung Galaxy S23",
    description: "Флагманский смартфон от Samsung",
    price: 89900,
    category: categories.find((c) => c.id === 25)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 9)!,
      categories.find((c) => c.id === 25)!,
    ],
  },
  {
    id: 11,
    title: "ASUS ROG Strix",
    description: "Игровой ноутбук для геймеров",
    price: 189900,
    category: categories.find((c) => c.id === 26)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 10)!,
      categories.find((c) => c.id === 26)!,
    ],
  },
  {
    id: 12,
    title: "MacBook Air M2",
    description: "Ультрабук от Apple с чипом M2",
    price: 149900,
    category: categories.find((c) => c.id === 27)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 10)!,
      categories.find((c) => c.id === 27)!,
    ],
  },
  {
    id: 13,
    title: "Молоко 3.2%",
    description: "Пастеризованное молоко",
    price: 180,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 14,
    title: "Сыр Российский",
    description: "Твердый сыр 45% жирности",
    price: 650,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 15,
    title: "Говядина вырезка",
    description: "Свежая говяжья вырезка",
    price: 2200,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 16,
    title: "Куриное филе",
    description: "Охлажденное куриное филе",
    price: 850,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 17,
    title: "Sony WH-1000XM5",
    description: "Беспроводные наушники с шумоподавлением",
    price: 34900,
    category: categories.find((c) => c.id === 12)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 12)!,
    ],
  },
  {
    id: 18,
    title: "Samsung QLED 4K",
    description: "Телевизор 55 дюймов с технологией QLED",
    price: 89900,
    category: categories.find((c) => c.id === 11)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 11)!,
    ],
  },
  {
    id: 19,
    title: "Джинсы мужские",
    description: "Классические мужские джинсы",
    price: 3900,
    category: categories.find((c) => c.id === 13)!,
    categories: [
      categories.find((c) => c.id === 3)!,
      categories.find((c) => c.id === 13)!,
    ],
  },
  {
    id: 20,
    title: "Платье летнее",
    description: "Легкое летнее платье",
    price: 4500,
    category: categories.find((c) => c.id === 14)!,
    categories: [
      categories.find((c) => c.id === 3)!,
      categories.find((c) => c.id === 14)!,
    ],
  },
  {
    id: 21,
    title: "Футболка детская",
    description: "Хлопковая футболка для детей",
    price: 1200,
    category: categories.find((c) => c.id === 15)!,
    categories: [
      categories.find((c) => c.id === 3)!,
      categories.find((c) => c.id === 15)!,
    ],
  },
  {
    id: 22,
    title: "Груша Конференц",
    description: "Сладкие груши из Бельгии",
    price: 720,
    category: categories.find((c) => c.id === 5)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
    ],
  },
  {
    id: 23,
    title: "Виноград Кишмиш",
    description: "Сладкий виноград без косточек",
    price: 950,
    category: categories.find((c) => c.id === 5)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
    ],
  },
  {
    id: 24,
    title: "Бананы спелые",
    description: "Спелые бананы из Эквадора",
    price: 480,
    category: categories.find((c) => c.id === 5)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
    ],
  },
  {
    id: 25,
    title: "Мандарины марокканские",
    description: "Сладкие мандарины без косточек",
    price: 620,
    category: categories.find((c) => c.id === 17)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 17)!,
    ],
  },
  {
    id: 26,
    title: "Лимон свежий",
    description: "Свежие лимоны для чая и выпечки",
    price: 380,
    category: categories.find((c) => c.id === 17)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 17)!,
    ],
  },
  {
    id: 27,
    title: "Малина замороженная",
    description: "Замороженная малина для десертов",
    price: 780,
    category: categories.find((c) => c.id === 18)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 18)!,
    ],
  },
  {
    id: 28,
    title: "Черника свежая",
    description: "Свежая черника для витаминов",
    price: 1250,
    category: categories.find((c) => c.id === 18)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 18)!,
    ],
  },
  {
    id: 29,
    title: "Абрикосы армянские",
    description: "Сочные абрикосы из Армении",
    price: 680,
    category: categories.find((c) => c.id === 19)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 19)!,
    ],
  },
  {
    id: 30,
    title: "Слива венгерка",
    description: "Венгерская слива для компотов",
    price: 520,
    category: categories.find((c) => c.id === 19)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 5)!,
      categories.find((c) => c.id === 19)!,
    ],
  },
  {
    id: 31,
    title: "Морковь столовая",
    description: "Свежая морковь для салатов",
    price: 180,
    category: categories.find((c) => c.id === 6)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
    ],
  },
  {
    id: 32,
    title: "Капуста белокочанная",
    description: "Свежая капуста для щей",
    price: 120,
    category: categories.find((c) => c.id === 6)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
    ],
  },
  {
    id: 33,
    title: "Лук репчатый",
    description: "Золотистый репчатый лук",
    price: 90,
    category: categories.find((c) => c.id === 6)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
    ],
  },
  {
    id: 34,
    title: "Чеснок молодой",
    description: "Свежий молодой чеснок",
    price: 320,
    category: categories.find((c) => c.id === 6)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
    ],
  },
  {
    id: 35,
    title: "Петрушка свежая",
    description: "Свежая зелень петрушки",
    price: 130,
    category: categories.find((c) => c.id === 23)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 23)!,
    ],
  },
  {
    id: 36,
    title: "Базилик зеленый",
    description: "Ароматный зеленый базилик",
    price: 210,
    category: categories.find((c) => c.id === 23)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 6)!,
      categories.find((c) => c.id === 23)!,
    ],
  },
  {
    id: 37,
    title: "Кефир 2.5%",
    description: "Свежий кефир для здоровья",
    price: 160,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 38,
    title: "Сметана 20%",
    description: "Домашняя сметана для борща",
    price: 240,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 39,
    title: "Творог 5%",
    description: "Нежирный творог для завтрака",
    price: 320,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 40,
    title: "Йогурт греческий",
    description: "Натуральный греческий йогурт",
    price: 180,
    category: categories.find((c) => c.id === 7)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 7)!,
    ],
  },
  {
    id: 41,
    title: "Свинина шея",
    description: "Нежная свиная шея для шашлыка",
    price: 1450,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 42,
    title: "Баранина охлажденная",
    description: "Свежая баранина для плова",
    price: 1850,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 43,
    title: "Индейка филе",
    description: "Филе индейки для диетического питания",
    price: 950,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 44,
    title: "Утка фермерская",
    description: "Фермерская утка для запекания",
    price: 1650,
    category: categories.find((c) => c.id === 8)!,
    categories: [
      categories.find((c) => c.id === 1)!,
      categories.find((c) => c.id === 8)!,
    ],
  },
  {
    id: 45,
    title: "OnePlus 11",
    description: "Флагманский смартфон от OnePlus",
    price: 65900,
    category: categories.find((c) => c.id === 25)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 9)!,
      categories.find((c) => c.id === 25)!,
    ],
  },
  {
    id: 46,
    title: "Xiaomi 13 Pro",
    description: "Премиальный смартфон от Xiaomi",
    price: 78900,
    category: categories.find((c) => c.id === 25)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 9)!,
      categories.find((c) => c.id === 25)!,
    ],
  },
  {
    id: 47,
    title: "Dell XPS 13",
    description: "Ультрабук премиум-класса",
    price: 129900,
    category: categories.find((c) => c.id === 27)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 10)!,
      categories.find((c) => c.id === 27)!,
    ],
  },
  {
    id: 48,
    title: "Lenovo Legion 5",
    description: "Игровой ноутбук для энтузиастов",
    price: 109900,
    category: categories.find((c) => c.id === 26)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 10)!,
      categories.find((c) => c.id === 26)!,
    ],
  },
  {
    id: 49,
    title: "AirPods Pro 2",
    description: "Беспроводные наушники от Apple",
    price: 28900,
    category: categories.find((c) => c.id === 12)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 12)!,
    ],
  },
  {
    id: 50,
    title: "Sony Bravia 4K",
    description: "Телевизор с технологией OLED",
    price: 159900,
    category: categories.find((c) => c.id === 11)!,
    categories: [
      categories.find((c) => c.id === 2)!,
      categories.find((c) => c.id === 11)!,
    ],
  },
];

export const productApi = {
  async getProducts(): Promise<Product[]> {
    return Promise.resolve(products);
  },
  async getProductById(id: number): Promise<Product> {
    const product = products.find((product) => product.id === id);
    if (!product) {
      return Promise.reject("Not Found");
    }
    return Promise.resolve(product);
  },
  async deleteProduct(id: number): Promise<boolean> {
    const productIndex = products.findIndex((product) => product.id === id);
    if (!productIndex) {
      return Promise.reject("Not Found");
    }
    products.slice(productIndex, 1);
    return Promise.resolve(true);
  },
  async createProduct(productPayload: CreateProduct): Promise<Product> {
    const product = {
      ...productPayload,
      id: products.length + 1,
    };
    products.push(product);
    return Promise.resolve(product);
  },
  async updateProduct(productPayload: Product): Promise<Product> {
    const productIndex = products.findIndex(
      (product) => product.id === product.id,
    );
    if (!productIndex) {
      return Promise.reject("Not Found");
    }
    products.splice(productIndex, 1, productPayload);
    return Promise.resolve(productPayload);
  },
  async searchProductByTitleOrDescription(value: string): Promise<Product[]> {
    const result = products.filter(
      (product) => product.title === value || product.description === value,
    );
    return Promise.resolve(result);
  },
};
