import { Id, UseCaseInterface } from "../../../@shared";
import { ClientAdminEntity } from "../../domain";
import { ClientAdminGatewayInterface } from "../../gateway";
import { InputAddClientUseDto, OutputAddClientUseDto } from "./AddClientDto";

export class AddClientUseCase implements UseCaseInterface {
  private _clientRepository: ClientAdminGatewayInterface;

  constructor(clientRepository: ClientAdminGatewayInterface) {
    this._clientRepository = clientRepository;
  }

  async execute(input: InputAddClientUseDto): Promise<OutputAddClientUseDto> {
    const inputClient = {
      id: new Id(input.id) || new Id(),
      name: input.name,
      email: input.email,
      address: input.address,
    };

    const client = new ClientAdminEntity(inputClient);
    await this._clientRepository.add(client);

    return {
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
