'use client'
import { DeviceEnum } from "@/enum/device.enum";
import citiesService from "@/services/cities.service";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { searchTenCitiesAction } from "../action/search.action";

export default function TenCitiesModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cities, setCities] = useState<string[]>();
    const [state, action] = useFormState(searchTenCitiesAction, undefined)

    useEffect(() => {
        async function getCities() {
            setCities(await citiesService.get());
        }
        getCities();
    }, []);

    useEffect(() => {
        if (state?.error) alert(`Ocorreu um erro: ${state.error}`)
        if (state?.data) alert('Informações salvas com sucesso')
    }, [state]);

    return (
        <>

            {
                !isModalOpen ?
                    <button onClick={() => setIsModalOpen(true)} className="bg-brand-secondary text-white py-2 px-4 rounded hover:bg-white transition-all hover:text-brand-secondary mt-8 self-center">
                        Buscar em várias cidades
                    </button>
                    : <div className="absolute w-full top-0 left-0 py-4 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-2xl font-bold mb-4">Buscar em 10 Cidades</h2>
                            <form action={action} className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3">
                                    <label htmlFor="query" className="font-semibold text-gray-700">Palavras chave</label>
                                    <input
                                        type="text"
                                        id="query"
                                        required
                                        name="query"
                                        className="px-3 py-4 border-gray-300 border rounded-md focus-visible:text-brand-primary focus-visible:outline-brand-primary sm:text-sm"
                                        placeholder="Insira as palavras chaves"
                                    />
                                </div>

                                {[...Array(10)].map((_, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <label htmlFor={`city-${i}`} className="font-semibold text-gray-700">Cidade {i + 1}</label>
                                        <select required id={`city-${i}`} name='city' className="capitalize px-3 py-4 border-gray-300 border rounded-md focus:text-brand-primary focus:border-brand-primary sm:text-sm">
                                            {!cities?.length && <option className="text-red-400">Nenhuma cidade disponível</option>}
                                            {cities?.map(((el, index) => <option className="capitalize" key={index} value={el}>{el}</option>))}
                                        </select>
                                    </div>
                                ))}

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="device" className="font-semibold text-gray-700">Tipo de dispositivo</label>
                                    <select id="device" required name="device" className="capitalize px-3 py-4 border-gray-300 border rounded-md focus:text-brand-primary focus:border-brand-primary sm:text-sm">
                                        {Object.values(DeviceEnum).map(((el, index) => <option className="capitalize" key={index} value={el}>{el}</option>))}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label htmlFor="email" className="font-semibold text-gray-700">E-mail que receberá a resposta</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        name="email"
                                        className="px-3 py-4 border-gray-300 border rounded-md focus-visible:text-brand-primary focus-visible:outline-brand-primary sm:text-sm"
                                        placeholder="Insira seu e-mail"
                                    />
                                </div>

                                <div className="flex justify-end gap-4 mt-4">
                                    <button type="button" onClick={_ => setIsModalOpen(false)} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700" >
                                        Cancelar
                                    </button>
                                    <button type="submit" className="bg-brand-primary text-white py-2 px-4 rounded hover:bg-brand-secondary transition-all hover:text-black" >
                                        Buscar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </>
    )
}