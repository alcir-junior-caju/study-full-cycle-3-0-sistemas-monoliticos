import { AggregateRootInterface, BaseEntity, Id } from "../../@shared";

type Input = {
  id?: Id;
  name: string;
  description: string;
  salesPrice: number;
};

export class ProductStoreCheckoutEntity extends BaseEntity implements AggregateRootInterface {
  private _name: string;
  private _description: string;
  private _salesPrice: number;

  constructor({ id, name, description, salesPrice }: Input) {
    super(id);
    this._name = name;
    this._description = description;
    this._salesPrice = salesPrice;
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
