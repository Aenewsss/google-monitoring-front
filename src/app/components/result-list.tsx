export default async function ResultsList() {

    const list: any = []

    return (
        <aside className=" bg-white p-8 rounded shadow-md shadow-gray-400 flex-grow">
            <h2 className="text-xl font-bold mb-4">Resultados das buscas</h2>
            <ul className="space-y-2">
                {list.length > 0 ? (
                    list.map((result, index) => (
                        <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <span className="font-medium text-gray-700">{result.domain}</span>
                        </li>
                    ))
                ) : (
                    <p>Nenhuma busca armazenada até o momento.</p>
                )}
            </ul>
        </aside>
    );
}
