import { exec } from 'child_process';

/**
 * Executes a shell command and returns it as a Promise.
 *
 * @param cmd - The shell command to execute.
 * @returns A Promise that resolves with the output of the shell command.
 */
export function sh(cmd?: string): Promise<string> {
  if (!cmd || !cmd.trim()) {
    return Promise.resolve('');
  }
  return new Promise((resolve) => {
    exec(cmd, (error: Error | null, stdout: string, stderr: string) => {
      if (error) {
        resolve(stderr);
      }
      resolve(stdout);
    });
  });
}
