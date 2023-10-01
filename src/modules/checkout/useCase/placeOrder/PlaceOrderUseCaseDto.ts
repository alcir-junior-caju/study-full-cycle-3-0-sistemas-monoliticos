export interface InputPlaceOrderUseCaseDto {
  clientId: string;
  products: {
    productId: string;
  }[];
}

export interface OutputPlaceOrderUseCaseDto {
  id: string;
  invoiceId: string;
  status: string;
  total: number;
  products: {
    productId: string;
  }[];
}
