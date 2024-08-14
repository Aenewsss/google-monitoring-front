const API = process.env.NEXT_PUBLIC_API

class ApiService {
    async post(endpoint: string, body: any) {
        try {
            return await (await fetch(`${API}/${endpoint}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })).json()
        } catch (error) {
            return error
        }
    }
    async put(endpoint: string, body: any) {
        try {

            return await (await fetch(`${API}/${endpoint}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            })).json()
        } catch (error) {
            return error
        }
    }
    async get(endpoint: string) {
        try {
            return await (await fetch(`${API}/${endpoint}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-cache'
            })).json()
        } catch (error) {
            return error
        }
    }
    async delete(endpoint: string) {
        try {
            return await (await fetch(`${API}/${endpoint}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
            })).json()
        } catch (error) {
            return error
        }
    }
}

const apiService = new ApiService()
export default apiService