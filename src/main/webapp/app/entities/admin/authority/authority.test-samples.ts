import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd379ddfc-af92-42a9-a5a5-99952e738bdb',
};

export const sampleWithPartialData: IAuthority = {
  name: 'cba9d4af-b986-4b76-ad4c-d8f3673f57b5',
};

export const sampleWithFullData: IAuthority = {
  name: '274a2a18-8939-4605-9f80-ba4f15ae027d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
