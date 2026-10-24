// Type-checks the "browser" export condition (npm run test:package)
import goldies from 'goldies';

const unique: number[] = goldies.array.dedupe([1, 1, 2]);

// @ts-expect-error the browser bundle has no Node-only utilities
goldies.node.sh('ls');

export { unique };
