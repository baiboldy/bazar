import type { CreateProduct, Product } from "@/entities/product/model/types.ts";

const products: Product[] = [
  {
    id: 1,
    title: "Яблоко",
    price: 500,
    description: "Алматинское",
  },
  {
    id: 2,
    title: "Груша",
    price: 600,
    description: "Вишневая",
  },
  {
    id: 3,
    title: "Виноград",
    price: 799,
    description: "Грузинское",
  },
  {
    id: 4,
    title: "Вишня",
    price: 585,
    description: "Заморская",
  },
  {
    id: 5,
    title: "Банан",
    price: 450,
    description: "Эквадорский",
  },
  {
    id: 6,
    title: "Апельсин",
    price: 650,
    description: "Марокканский",
  },
  {
    id: 7,
    title: "Мандарин",
    price: 550,
    description: "Абхазский",
  },
  {
    id: 8,
    title: "Киви",
    price: 750,
    description: "Китайский",
  },
  {
    id: 9,
    title: "Ананас",
    price: 1200,
    description: "Тайский",
  },
  {
    id: 10,
    title: "Манго",
    price: 950,
    description: "Индийский",
  },
  {
    id: 11,
    title: "Персик",
    price: 680,
    description: "Узбекский",
  },
  {
    id: 12,
    title: "Абрикос",
    price: 720,
    description: "Армянский",
  },
  {
    id: 13,
    title: "Слива",
    price: 580,
    description: "Молдавская",
  },
  {
    id: 14,
    title: "Черешня",
    price: 890,
    description: "Крымская",
  },
  {
    id: 15,
    title: "Клубника",
    price: 1100,
    description: "Турецкая",
  },
  {
    id: 16,
    title: "Малина",
    price: 1250,
    description: "Белорусская",
  },
  {
    id: 17,
    title: "Ежевика",
    price: 1350,
    description: "Польская",
  },
  {
    id: 18,
    title: "Голубика",
    price: 1500,
    description: "Канадская",
  },
  {
    id: 19,
    title: "Клюква",
    price: 950,
    description: "Болотная",
  },
  {
    id: 20,
    title: "Брусника",
    price: 880,
    description: "Лесная",
  },
  {
    id: 21,
    title: "Облепиха",
    price: 780,
    description: "Алтайская",
  },
  {
    id: 22,
    title: "Инжир",
    price: 920,
    description: "Турецкий",
  },
  {
    id: 23,
    title: "Гранат",
    price: 850,
    description: "Азербайджанский",
  },
  {
    id: 24,
    title: "Хурма",
    price: 670,
    description: "Узбекская",
  },
  {
    id: 25,
    title: "Фейхоа",
    price: 1100,
    description: "Абхазская",
  },
  {
    id: 26,
    title: "Авокадо",
    price: 950,
    description: "Мексиканский",
  },
  {
    id: 27,
    title: "Лимон",
    price: 480,
    description: "Турецкий",
  },
  {
    id: 28,
    title: "Лайм",
    price: 520,
    description: "Бразильский",
  },
  {
    id: 29,
    title: "Грейпфрут",
    price: 690,
    description: "Израильский",
  },
  {
    id: 30,
    title: "Помело",
    price: 780,
    description: "Китайское",
  },
  {
    id: 31,
    title: "Карамбола",
    price: 1450,
    description: "Тайская",
  },
  {
    id: 32,
    title: "Маракуйя",
    price: 1600,
    description: "Бразильская",
  },
  {
    id: 33,
    title: "Папайя",
    price: 1250,
    description: "Тайская",
  },
  {
    id: 34,
    title: "Дуриан",
    price: 2500,
    description: "Малайзийский",
  },
  {
    id: 35,
    title: "Рамбутан",
    price: 1800,
    description: "Вьетнамский",
  },
  {
    id: 36,
    title: "Личи",
    price: 1650,
    description: "Китайский",
  },
  {
    id: 37,
    title: "Кумкват",
    price: 1400,
    description: "Японский",
  },
  {
    id: 38,
    title: "Питайя",
    price: 1950,
    description: "Вьетнамская",
  },
  {
    id: 39,
    title: "Арбуз",
    price: 350,
    description: "Астраханский",
  },
  {
    id: 40,
    title: "Дыня",
    price: 550,
    description: "Туркменская",
  },
  {
    id: 41,
    title: "Тыква",
    price: 280,
    description: "Мускатная",
  },
  {
    id: 42,
    title: "Кабачок",
    price: 320,
    description: "Молодой",
  },
  {
    id: 43,
    title: "Баклажан",
    price: 450,
    description: "Синенький",
  },
  {
    id: 44,
    title: "Помидор",
    price: 380,
    description: "Черри",
  },
  {
    id: 45,
    title: "Огурец",
    price: 290,
    description: "Грунтовый",
  },
  {
    id: 46,
    title: "Перец",
    price: 520,
    description: "Болгарский",
  },
  {
    id: 47,
    title: "Морковь",
    price: 180,
    description: "Корейская",
  },
  {
    id: 48,
    title: "Свекла",
    price: 220,
    description: "Столовая",
  },
  {
    id: 49,
    title: "Картофель",
    price: 150,
    description: "Молодой",
  },
  {
    id: 50,
    title: "Лук",
    price: 190,
    description: "Красный",
  },
  {
    id: 51,
    title: "Чеснок",
    price: 380,
    description: "Молодой",
  },
  {
    id: 52,
    title: "Имбирь",
    price: 650,
    description: "Свежий",
  },
  {
    id: 53,
    title: "Петрушка",
    price: 120,
    description: "Зелень",
  },
  {
    id: 54,
    title: "Укроп",
    price: 110,
    description: "Свежий",
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
