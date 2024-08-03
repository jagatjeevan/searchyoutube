let configs;

export function getConfig(key) {
    return configs[key] || null;
}

export function setConfig(key, value) {
    configs[key] = value;
}

export function readAllConfigs() {
    const API_KEY = process.env.API_KEY;
    setConfig('apiKey', API_KEY);
}