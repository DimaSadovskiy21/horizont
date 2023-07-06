import { FC } from "react";

import { CATEGORIES } from "constant/categories";

import { IFiltersProps } from "./types";
import { Filter, FiltersWrapper } from "./styles";

const Filters: FC<IFiltersProps> = ({
  category,
  handleClickChangeCategory,
}) => (
  <FiltersWrapper>
    <Filter
      $isActive={category === CATEGORIES.ALL}
      onClick={handleClickChangeCategory(CATEGORIES.ALL)}
    >
      {CATEGORIES.ALL}
    </Filter>
    <Filter
      $isActive={category === CATEGORIES.NATURE}
      onClick={handleClickChangeCategory(CATEGORIES.NATURE)}
    >
      {CATEGORIES.NATURE}
    </Filter>
    <Filter
      $isActive={category === CATEGORIES.CARS}
      onClick={handleClickChangeCategory(CATEGORIES.CARS)}
    >
      {CATEGORIES.CARS}
    </Filter>
    <Filter
      $isActive={category === CATEGORIES.ANIMALS}
      onClick={handleClickChangeCategory(CATEGORIES.ANIMALS)}
    >
      {CATEGORIES.ANIMALS}
    </Filter>
    <Filter
      $isActive={category === CATEGORIES.BUILDINGS}
      onClick={handleClickChangeCategory(CATEGORIES.BUILDINGS)}
    >
      {CATEGORIES.BUILDINGS}
    </Filter>
    <Filter
      $isActive={category === CATEGORIES.SPORTS}
      onClick={handleClickChangeCategory(CATEGORIES.SPORTS)}
    >
      {CATEGORIES.SPORTS}
    </Filter>
  </FiltersWrapper>
);

export default Filters;
