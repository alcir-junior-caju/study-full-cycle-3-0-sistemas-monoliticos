import { Id } from "../../@shared";
import { ClientAdminEntity } from "../domain";
import { ClientAdminGatewayInterface } from "../gateway";
import { ClientAdminModel } from "./ClientAdminModel";

export class ClientAdminRepository implements ClientAdminGatewayInterface {
  async add(client: ClientAdminEntity): Promise<void> {
    await ClientAdminModel.create({
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }

  async find(id: string): Promise<ClientAdminEntity> {
    const client = await ClientAdminModel.findOne({ where: { id } });

    if (!client) {
      throw new Error('Client not found');
    }

    return new ClientAdminEntity({
      id: new Id(client.id),
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  }
}
