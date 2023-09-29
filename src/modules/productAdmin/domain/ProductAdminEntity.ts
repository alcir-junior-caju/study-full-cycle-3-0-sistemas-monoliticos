import { AggregateRootInterface, BaseEntity, Id } from "../../@shared";

type Input = {
  id?: Id;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export class ProductAdminEntity extends BaseEntity implements AggregateRootInterface {
  private _name: string;
  private _description: string;
  private _purchasePrice: number;
  private _stock: number;

  constructor(input: Input) {
    super(input.id);
    this._name = input.name;
    this._description = input.description;
    this._purchasePrice = input.purchasePrice;
    this._stock = input.stock;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get purchasePrice(): number {
    return this._purchasePrice;
  }

  get stock(): number {
    return this._stock;
  }

  set name(name: string) {
    this._name = name;
  }

  set description(description: string) {
    this._description = description;
  }

  set purchasePrice(purchasePrice: number) {
    this._purchasePrice = purchasePrice;
  }

  set stock(stock: number) {
    this._stock = stock;
  }
}
