'use server'
import { DeviceEnum } from "@/enum/device.enum"
import { ISearchTenCities } from "@/interfaces/search-ten-cities.interface"
import { ISearch } from "@/interfaces/search.interface"
import searchService from "@/services/search.service"
import { redirect } from "next/navigation"

export async function searchAction(state: any, form: FormData) {
    const query = form.get('query') as string
    const city = form.get('city') as string
    const device = form.get('device') as DeviceEnum

    const data: ISearch = {
        query,
        city,
        device
    }

    const response = await searchService.search(data)
    if (!response) return { data: null, error: "Erro ao realizar operação" }

    return { data: response, error: null }
}

export async function searchTenCitiesAction(state: any, form: FormData) {
    const query = form.get('query') as string
    const cities = form.getAll('city') as string[]
    const device = form.get('device') as DeviceEnum
    const email = form.get('email') as string

    const data: ISearchTenCities = {
        query,
        cities,
        device,
        email
    }

    const response = await searchService.searchTenCities(data)
    if (!response) return { data: null, error: "Erro ao realizar operação" }

    return { data: response, error: null }

}