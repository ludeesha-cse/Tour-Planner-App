import axios from 'axios';

export const DestinationRec = async(loc) => {
    console.log("DestinationRec api called and now working on it ");
    const params = {
        api_key: "BA3979C577B645AE88935E80128740AD",
          search_type: "places",
          q: "places to visit in "+loc,
          gl: "lk"
    }

    axios.get('https://api.scaleserp.com/search', { params })
    .then(response => {
        console.log(response.data.places_results);
        return response.data;
    })
    .catch(error => {
        console.log(error);
    });
}

export default DestinationRec;