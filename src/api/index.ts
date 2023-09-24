import { API_URL, API_KEY } from '@env';

const useRestaurantsService = () => {
    const apiKey = API_KEY;
    const url = API_URL;

    const getRestaurantsFromApi = () => {
        const options: RequestInit = {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }

        return fetch(url, options)
            .then(res => res.json())
            .then(json => {
                if(json.error) {
                    console.log('hola');
                    console.log(json.error.code);
                    return [];
                }
                return json.businesses;
            }).catch(error => {
                console.log(error);
                return [];
            })

    }

    return {
        getRestaurantsFromApi,
    }
}

export default useRestaurantsService;
