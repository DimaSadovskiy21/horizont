import { IPhotoResponse, TCategory } from "types/photos";

export interface IPhotosState {
  photos: IPhotoResponse[];
  currentPhotos: IPhotoResponse[];
  photo: IPhotoResponse;
  category: TCategory;
  isLoading: boolean;
  error: string;
}
