export interface InputAddClientAdminDto {
  id?: string;
  name: string;
  email: string;
  address: string;
}

export interface InputFindClientAdminDto {
  id: string;
}

export interface OutputFindClientAdminDto {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
