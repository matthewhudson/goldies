import { sh } from './sh';

describe('sh', () => {
  test('executes shell command and returns output', async () => {
    const output: string = await sh('echo hello');
    expect(output.trim()).toEqual('hello');
  });

  test('handles shell command errors', async () => {
    const output: string = await sh('this_command_does_not_exist');
    expect(output).toMatch(/not found/);
  });

  test('handles empty commands', async () => {
    const output: string = await sh('');
    expect(output).toEqual('');
  });

  test('handles whitespace commands', async () => {
    const output: string = await sh('   ');
    expect(output).toEqual('');
  });

  test('handles missing input', async () => {
    const output: string = await sh(undefined);
    expect(output).toEqual('');
  });
});
