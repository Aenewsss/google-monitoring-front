import { ISearch } from "@/interfaces/search.interface"
import apiService from "./api.service"

const ENDPOINT = 'search'

class SearchService {
    async get(data: ISearch) {
        return await apiService.post(ENDPOINT, { ...data })
    }
}

const searchService = new SearchService()
export default searchService