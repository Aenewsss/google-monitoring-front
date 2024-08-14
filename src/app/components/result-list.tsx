import searchService from "@/services/search.service";

export default async function ResultsList() {

    const list = await searchService.get()

    return (
        <aside className=" bg-white p-8 rounded shadow-md shadow-gray-400 flex-grow">
            <h2 className="text-xl font-bold mb-4">Resultados das buscas</h2>
            <div className="flex flex-col gap-8 ">
                {list.length > 0 ? (
                    list.map((result, index) => (
                        <div className="flex flex-col gap-2">
                            <span className="px-4 py-2 rounded-full border bg-brand-primary text-white flex self-start">{index + 1}</span>
                            <ul>
                                <li key={index}> <span className="font-bold">Título:</span> {result.title}</li>
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
