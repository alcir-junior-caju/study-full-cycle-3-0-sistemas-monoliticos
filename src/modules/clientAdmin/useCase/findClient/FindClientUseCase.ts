import { UseCaseInterface } from "../../../@shared";
import { ClientAdminGatewayInterface } from "../../gateway";
import { InputFindClientDto, OutputFindClientDto } from "./FindClientDto";

export class FindClientUseCase implements UseCaseInterface {
  private _clientRepository: ClientAdminGatewayInterface;

  constructor(clientRepository: ClientAdminGatewayInterface) {
    this._clientRepository = clientRepository;
  }

  async execute(input: InputFindClientDto): Promise<OutputFindClientDto> {
    const product = await this._clientRepository.find(input.id);

    return {
      id: product.id.id,
      name: product.name,
      email: product.email,
      address: product.address,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    }
  }
}
