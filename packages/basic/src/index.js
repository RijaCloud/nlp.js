const { ConsoleConnector } = require('@nlpjs/console-connector');
const {
  Among,
  ArrToObj,
  BaseStemmer,
  containerBootstrap,
  Clonable,
  Container,
  defaultContainer,
  hasUnicode,
  unicodeToArray,
  asciiToArray,
  stringToArray,
  compareWildcars,
  getAbsolutePath,
  listFiles,
  listFilesAbsolute,
  loadEnv,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  MemoryStorage,
  uuid,
  dock,
  Context,
  dockStart,
} = require('@nlpjs/core-loader');
const {
  Evaluator,
  compile,
  Template,
  JavascriptCompiler,
} = require('@nlpjs/evaluator');
const {
  LangEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
  NormalizerEn,
  SentimentEn,
} = require('@nlpjs/lang-en');
const { logger } = require('@nlpjs/logger');
const { Nlp } = require('@nlpjs/nlp');

module.exports = {
  ConsoleConnector,
  Among,
  ArrToObj,
  BaseStemmer,
  containerBootstrap,
  Clonable,
  Container,
  defaultContainer,
  hasUnicode,
  unicodeToArray,
  asciiToArray,
  stringToArray,
  compareWildcars,
  getAbsolutePath,
  listFiles,
  listFilesAbsolute,
  loadEnv,
  Normalizer,
  ObjToArr,
  Stemmer,
  Stopwords,
  Tokenizer,
  Timer,
  MemoryStorage,
  uuid,
  dock,
  Context,
  dockStart,
  Evaluator,
  compile,
  Template,
  JavascriptCompiler,
  LangEn,
  StemmerEn,
  StopwordsEn,
  TokenizerEn,
  NormalizerEn,
  SentimentEn,
  logger,
  Nlp,
};
