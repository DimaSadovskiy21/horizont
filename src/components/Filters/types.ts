import { TCategory } from "types/photos";

export interface IFiltersProps {
  category: TCategory;
  handleClickChangeCategory: (category: TCategory) => () => void;
}

export interface IFilterStyledProps {
  $isActive: boolean;
}