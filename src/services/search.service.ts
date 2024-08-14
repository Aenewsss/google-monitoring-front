import { ISearch } from "@/interfaces/search.interface"
import { IGetSearchResponse } from "@/interfaces/get-search-response.interface"
import apiService from "./api.service"

const ENDPOINT = 'search'

class SearchService {
    async search(data: ISearch) {
        return await apiService.post(ENDPOINT, { ...data })
    }

    async get(): Promise<IGetSearchResponse[]> {
        return await apiService.get(ENDPOINT)
    }
}

const searchService = new SearchService()
export default searchService