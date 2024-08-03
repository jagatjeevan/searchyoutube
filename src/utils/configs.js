let configs = {};

export function getConfig(key) {
  return configs[key] || null;
}

export function setConfig(key, value) {
  configs[key] = value;
}

export function readAllConfigs() {
  const API_KEY = process.env.REACT_APP_API_KEY || null;
  setConfig('apiKey', API_KEY);
}
