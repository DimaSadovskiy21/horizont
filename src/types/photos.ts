export type TCategory =
  | "all"
  | "nature"
  | "cars"
  | "animals"
  | "buildings"
  | "sports";

export interface IPhotoResponse {
  id: string;
  title: string;
  category: TCategory;
  description: string;
  imgUrl: string;
}
