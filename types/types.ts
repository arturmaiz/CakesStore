export type MenuType = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  img?: string;
}[];

export type ProductType = {
  id: string;
  description?: string;
  title: string;
  img?: string;
  slug: string;
  catSlug: string;
  price: number;
};
