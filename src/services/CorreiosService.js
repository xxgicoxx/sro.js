const fetch = require('node-fetch');

const { correiosConfig } = require('../configs');
const { constants } = require('../utils');

class CorreiosService {
  async track(code) {
    try {
      if (!code || code.length < constants.CODE_MIN || code.length > constants.CODE_MAX) {
        throw new Error(constants.CODE_INVALID);
      }

      const response = await fetch(`${correiosConfig.api}${code}`);

      if (!response.ok) {
        throw new Error(constants.ERROR_TRY_AGAIN);
      }

      const json = await response.json();

      return json.objetos[0];
    } catch (error) {
      return error;
    }
  }
}

module.exports = CorreiosService;
