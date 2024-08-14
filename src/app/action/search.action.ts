'use server'
export default async function searchAction(state: any, form: FormData) {
    const query = form.get('query')
    const city = form.get('city')
    const device = form.get('device')

    console.log(query, city,device)
}