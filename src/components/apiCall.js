import axios from "axios"


const apiCall = (parameter, chosen, setResult) => {
    // establish URL based on form data:
    const apiBaseUrl = "https://www.dnd5eapi.co/api/"
    
    const currentURL = apiBaseUrl + parameter + chosen

    const axiosCallComplete = new Promise((resolve, reject) => {
        axios({
            url: currentURL,
        }).then((returned) => {
            // use returned data from API call to set State:
            setResult(returned.data);
            resolve();
        }).catch((error) => {
            alert(error);
            reject();
        })
    })
    // return promise that axios call was complete
    return axiosCallComplete;
}

export default apiCall