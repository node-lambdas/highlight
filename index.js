import { lambda, Format } from '@node-lambdas/core';
import { promises } from 'fs';
import hljs from 'highlight.js';

const configutation = {
  version: 1,
  input: Format.Text,
  output: Format.Text,
};

const matchLanguage = /^\/lang\/(.+?)$/;
let embedTemplate;

const getEmbedTemplate = async () => {
  if (!embedTemplate) {
    embedTemplate = await promises.readFile('./embed.html');
  }

  return embedTemplate;
};

lambda(configutation, (input, output) => {
  input.pipe(output);
  console.log(input.url);
  // const url = new URL(input.url);
  // const embed = !!url.searchParams.get('embed');
  // const template = embed ? getEmbedTemplate() : '%code%';

  // console.log(url, embed);
  // const language = matchLanguage(url.pathname);
  // return output.send(200, '');

  // if (language) {
  //   try {
  //     output.send(hljs.highlight(language, input.body).value);
  //     return;
  //   } catch {}
  // }

  // output.send(hljs.highlightAuto(input.body).value);
});
