import {memo} from "react";

const useRestaurantsService = () => {
    const getRestaurantsFromApi = () => {
        const url = `https://api.yelp.com/v3/businesses/search?location=ensenada&sort_by=best_match&limit=20`;
        const apiKey = 'Kq1jhQIzioJ55T23Xx5TA_q_2vcepmoItljnsA3r6bpS_QUXiZszjgLJlg0z_aixwnM-SNJbC8kPOTVDo9T7kWR7JokUz8-Ow1M6TGlJB9ZOFOozU2r6pGVMvu0MZXYx';

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
