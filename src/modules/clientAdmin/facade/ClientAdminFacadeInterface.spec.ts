import { Sequelize } from "sequelize-typescript";
import { ClientAdminModel } from "../repository";
import { ClientAdminFacadeFactory } from "../factory";

describe('Integration test client admin facade', () => {
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

  it('should create a client', async () => {
    const clientFacade = ClientAdminFacadeFactory.create();
    const input = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@test.com',
      address: '123 Main St',
    };

    await clientFacade.add(input);

    const client = await ClientAdminModel.findOne({ where: { id: input.id } });

    expect(client).toBeDefined();
    expect(client.id).toBe(input.id);
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });

  it('should find a client', async () => {
    const clientFacade = ClientAdminFacadeFactory.create();

    const input = {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@test.com',
      address: '123 Main St',
    };

    await clientFacade.add(input);

    const client = await clientFacade.find({ id: input.id });

    expect(client).toBeDefined();
    expect(client.id).toBe(input.id);
    expect(client.name).toBe(input.name);
    expect(client.email).toBe(input.email);
    expect(client.address).toBe(input.address);
  });
});
