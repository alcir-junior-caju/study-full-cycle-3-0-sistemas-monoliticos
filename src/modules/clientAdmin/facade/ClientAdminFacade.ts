import { UseCaseInterface } from "../../@shared";
import { InputAddClientAdminDto, InputFindClientAdminDto, OutputFindClientAdminDto } from "./ClientAdminFacadeDto";
import { ClientAdminFacadeInterface } from "./ClientAdminFacadeInterface";

interface UseCases {
  addUseCase: UseCaseInterface;
  findUseCase: UseCaseInterface;
}

export class ClientAdminFacade implements ClientAdminFacadeInterface {
  private _addUseCase: UseCaseInterface;
  private _findUseCase: UseCaseInterface;

  constructor({ addUseCase, findUseCase }: UseCases) {
    this._addUseCase = addUseCase;
    this._findUseCase = findUseCase;
  }

  add(input: InputAddClientAdminDto): Promise<void> {
    const inputFacade = {
      id: input.id,
      name: input.name,
      email: input.email,
      address: input.address,
    };

    return this._addUseCase.execute(inputFacade);
  }
  find(input: InputFindClientAdminDto): Promise<OutputFindClientAdminDto> {
    const inputFacade = {
      id: input.id,
    };

    return this._findUseCase.execute(inputFacade);
  }
}
