class ProviderApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders(){
        return{}
    }

    static getAllProviders() {
        const headers = this.requestHeaders();
        const request = new Request(ProviderApi.API_BASE_URL + "/providers", {
            method: 'GET',
            headers: headers
        });

        return fetch(request).then(response => {
            return response.json();
        });
    }
}

export default ProviderApi;