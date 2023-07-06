import { useAppDispatch, useAppSelector } from "hooks/redux";
import { TCategory } from "types/photos";
import { categorySelector, setCategory } from "store/reducers/photos";

import Filters from "./Filters";

const FiltersContainer = () => {
  const category = useAppSelector(categorySelector);
  const dispatch = useAppDispatch();

  const handleClickChangeCategory = (category: TCategory) => () =>
    dispatch(setCategory(category));

  return (
    <Filters
      category={category}
      handleClickChangeCategory={handleClickChangeCategory}
    />
  );
};

export default FiltersContainer;
