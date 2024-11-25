import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '816ad247-57ec-47ed-9da2-de0823ab4569',
  login: 'Js',
};

export const sampleWithPartialData: IUser = {
  id: 'f92cbca1-289b-43b9-8147-b38ca0dc424c',
  login: '_@KEM6C\\OXQQZ\\ba\\rfpmq',
};

export const sampleWithFullData: IUser = {
  id: '3aacc12e-7a68-4afc-a0f4-89bc9160f505',
  login: '_2K',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
