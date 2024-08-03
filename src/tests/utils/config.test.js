import { getConfig, readAllConfigs, setConfig } from '../../utils/configs';

test('config', () => {
  readAllConfigs();
  const value = getConfig('apiKey');
  //   I have created a test env file which has the value of REACT_APP_API_KEY as 123ABC
  expect(value).toBe('123ABC');
  setConfig('name', 'Jeevan');
  expect(getConfig('name')).toBe('Jeevan');
});
