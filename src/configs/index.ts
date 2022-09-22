import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const env = publicRuntimeConfig.ENV || 'development';

interface Config {
  ENV: 'development' | 'preparing' | 'production';
}

const configData: Record<string, Config> = {
  development: {
    ENV: env,
  },

  preparing: {
    ENV: env,
  },

  production: {
    ENV: env,
  },
};

const configs: Config = configData[env];

export default configs;
