import { DeviceEnum } from "@/enum/device.enum"

export interface ISearchTenCities {
    query: string
    cities: string[]
    device: DeviceEnum
    email:string
}