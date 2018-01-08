// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL: 'https://api.twitch.tv/kraken/games/top',
  SEARCH_URL: 'https://api.twitch.tv/kraken/search/games?type=suggest&',
  BASE_URL2: 'https://api.twitch.tv/kraken/streams/',
};
