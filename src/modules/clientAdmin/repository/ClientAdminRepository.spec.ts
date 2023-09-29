import { Sequelize } from "sequelize-typescript";
import { ClientAdminModel } from "./ClientAdminModel";
import { ClientAdminRepository } from "./ClientAdminRepository";
import { ClientAdminEntity } from "../domain";
import { Id } from "../../@shared";

const client = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@test.com',
  address: '123 Main St',
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('Integration test client admin repository', () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ClientAdminModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it('should find a client', async () => {
    await ClientAdminModel.create(client);

    const clientRepository = new ClientAdminRepository();
    const output = await clientRepository.find(client.id);

    expect(output.id.id).toBe(client.id);
    expect(output.name).toBe(client.name);
    expect(output.email).toBe(client.email);
    expect(output.address).toBe(client.address);
    expect(output.createdAt).toStrictEqual(client.createdAt);
    expect(output.updatedAt).toStrictEqual(client.updatedAt);
  });

  it('should create a client', async () => {
    const client = new ClientAdminEntity({
      id: new Id('1'),
      name: 'John Doe',
      email: 'johndoe@test.com',
      address: '123 Main St',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const clientRepository = new ClientAdminRepository();
    await clientRepository.add(client);

    const clientDb = await ClientAdminModel.findOne({ where: { id: client.id.id } });

    expect(clientDb).toBeDefined();
    expect(clientDb.id).toBe(client.id.id);
    expect(clientDb.name).toBe(client.name);
    expect(clientDb.email).toBe(client.email);
    expect(clientDb.address).toBe(client.address);
    expect(clientDb.createdAt).toStrictEqual(client.createdAt);
    expect(clientDb.updatedAt).toStrictEqual(client.updatedAt);
  });
});
