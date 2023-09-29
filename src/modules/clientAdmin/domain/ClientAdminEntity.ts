import { AggregateRootInterface, BaseEntity, Id } from "../../@shared";

type Input = {
  id?: Id;
  name: string;
  email: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class ClientAdminEntity extends BaseEntity implements AggregateRootInterface {
  private _name: string;
  private _email: string;
  private _address: string;

  constructor({ id, name, email, address, createdAt, updatedAt }: Input) {
    super(id, createdAt, updatedAt);
    this._name = name;
    this._email = email;
    this._address = address;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get address(): string {
    return this._address;
  }
}
