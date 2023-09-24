import {memo} from "react";

const useRestaurantsService = () => {
    const getRestaurantsFromApi = () => {
        const url = ``;
        const apiKey = '';

        const options: RequestInit = {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }

        return fetch(url, options)
            .then(res => res.json())
            .then(json => {
                if(json.error) {
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
