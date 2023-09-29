export interface InputAddClientUseDto {
  id?: string;
  name: string;
  email: string;
  address: string;
}

export interface OutputAddClientUseDto {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
