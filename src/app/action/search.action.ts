'use server'
import { DeviceEnum } from "@/enum/device.enum"
import { ISearch } from "@/interfaces/search.interface"
import searchService from "@/services/search.service"

export default async function searchAction(state: any, form: FormData) {
    const query = form.get('query') as string
    const city = form.get('city') as string
    const device = form.get('device') as DeviceEnum

    const data: ISearch = {
        query,
        city,
        device
    }

    const response = await searchService.search(data)

    return response
}