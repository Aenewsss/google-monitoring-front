import { DeviceEnum } from "@/enum/device.enum"

export interface ISearch {
    query: string
    city: string
    device: DeviceEnum
}