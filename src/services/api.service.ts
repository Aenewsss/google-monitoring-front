const API = process.env.NEXT_PUBLIC_API

class ApiService {
    async post(endpoint: string, body: any) {
        return await (await fetch(`${API}/${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })).json()
    }
    async put(endpoint: string, body: any) {
        return await (await fetch(`${API}/${endpoint}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })).json()
    }
    async get(endpoint: string) {
        return await (await fetch(`${API}/${endpoint}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })).json()
    }
    async delete(endpoint: string) {
        return await (await fetch(`${API}/${endpoint}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })).json()
    }
}

const apiService = new ApiService()
export default apiService