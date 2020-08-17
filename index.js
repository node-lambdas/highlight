import { lambda, Format } from '@node-lambdas/core';
import hljs from 'highlight.js';

const configutation = {
  version: 1,
  input: Format.Text,
  output: Format.Text,
};

lambda(configutation, (input, output) => {
  const language = input.headers['x-language'];

  if (language) {
    try {
      output.send(hljs.highlight(language, input.body).value);
      return;
    } catch {}
  }

  output.send(hljs.highlightAuto(input.body).value);
});
