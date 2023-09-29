import { AddClientUseCase } from "./AddClientUseCase";

const MockRepository = () => ({
  add: jest.fn(),
  find: jest.fn(),
});

describe('Unit test add client use case', () => {
  it('should add a client', async () => {
    const clientRepository = MockRepository();
    const addClientUseCase = new AddClientUseCase(clientRepository);

    const input = {
      name: 'John Doe',
      email: 'johndoe@test.com',
      address: 'Street 1'
    }

    const output = await addClientUseCase.execute(input);

    expect(clientRepository.add).toBeCalledTimes(1);
    expect(output.id).toBeDefined();
    expect(output.name).toBe(input.name);
    expect(output.email).toBe(input.email);
    expect(output.address).toBe(input.address);
  });
});
