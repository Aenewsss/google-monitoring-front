'use client'
import { useFormState } from "react-dom";
import searchAction from "../action/search.action";
import { DeviceEnum } from "@/enum/device.enum";
import { useEffect, useState } from "react";
import citiesService from "@/services/cities.service";

export default function SearchForm() {
    const [state, action] = useFormState(searchAction, undefined)
    const [cities, setCities] = useState<string[]>();

    useEffect(() => {
        async function getCities() {
            setCities(await citiesService.get())
        }
        getCities()
    }, []);

    return (
        <form action={action} className="flex flex-col justify-between bg-white p-8 rounded gap-4 shadow-md shadow-gray-400 lg:max-w-96">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <label htmlFor="query" className="font-semibold text-gray-700">Palavras chave</label>
                    <input
                        type="text"
                        id="query"
                        name="query"
                        className="px-3 py-4 border-gray-300 border rounded-md focus-visible:text-brand-primary focus-visible:outline-brand-primary sm:text-sm"
                        placeholder="Insira as palavras chaves"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="city" className="font-semibold text-gray-700">Cidade</label>
                    <select id="city" name="city" className="capitalize px-3 py-4 border-gray-300 border rounded-md focus:text-brand-primary focus:border-brand-primary sm:text-sm">
                        {!cities?.length && <option className="text-red-400">Nenhuma cidade disponível</option>}
                        {cities?.map(((el, index) => <option selected={index == 0} className="capitalize" key={index} value={el}>{el}</option>))}
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="device" className="font-semibold text-gray-700">Tipo de dispositivo</label>
                    <select id="device" name="device" className="capitalize px-3 py-4 border-gray-300 border rounded-md focus:text-brand-primary focus:border-brand-primary sm:text-sm">
                        {Object.values(DeviceEnum).map(((el, index) => <option selected={index == 0} className="capitalize" key={index} value={el}>{el}</option>))}
                    </select>
                </div>
            </div>
            <button type="submit" className="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary transition-all hover:text-black" >Buscar</button>
        </form>
    );
}
