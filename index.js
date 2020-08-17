import { lambda } from '@node-lambdas/core';

const configutation = {
  version: 1,
};

lambda(configutation, (input, output) => input.pipe(output));
