import apiService from "./api.service"

const ENDPOINT = 'cities'

class CitiesService {
    async get(){
        return await apiService.get(ENDPOINT)
    }
}

const citiesService = new CitiesService()
export default citiesService