import { AggregateRootInterface, BaseEntity, Id } from "../../@shared";

type Input = {
  id: Id;
  name: string;
  description: string;
  salesPrice: number;
};

export class ProductStoreCatalogEntity extends BaseEntity implements AggregateRootInterface {
  private _name: string;
  private _description: string;
  private _salesPrice: number;

  constructor(input: Input) {
    super(input.id);
    this._name = input.name;
    this._description = input.description;
    this._salesPrice = input.salesPrice;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get salesPrice(): number {
    return this._salesPrice;
  }
}
