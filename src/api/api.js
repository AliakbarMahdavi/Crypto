import axios from "axios"

export const data = async () => {

    const Url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"; 

    const response = await axios.get(Url)
    return response.data

}


