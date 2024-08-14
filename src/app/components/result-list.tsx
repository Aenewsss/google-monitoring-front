import searchService from "@/services/search.service";

export default async function ResultsList() {

    const list = await searchService.get()

    return (
        <aside className=" bg-white p-8 rounded shadow-md shadow-gray-400 flex-grow  max-h-[460px] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Resultados das buscas</h2>
            <div className="flex flex-col gap-8 ">
                {list?.length > 0 ? (
                    list.map((result, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <span className="px-4 py-2 rounded-full border bg-brand-primary text-white flex self-start">{index + 1}</span>
                            <ul>
                                <li> <span className="font-bold">Título:</span> {result.title}</li>
                                <li key={index}> <span className="font-bold">Descrição:</span> {result.snippet}</li>
                                <li key={index} className="break-words"> <span className="font-bold">Link:</span> {result.link}</li>
                            </ul>
                        </div>
                    ))
                ) : (
                    <p>Nenhuma busca armazenada até o momento.</p>
                )}
            </div>
        </aside>
    );
}
