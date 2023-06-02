const { AppState } = require("../AppState.js")
const { logger } = require("../utils/Logger.js")


class HousesService {
  async getHouses() {
    const res = await api.get('api/cars')
    logger.log('getting houses', res.data)
    AppState.houses = res.data.map(h => new House(h))
  }
}

export const housesService = new HousesService()