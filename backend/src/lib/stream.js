import {StreamChat} from "stream-chat"
import "dotenv/config"

const apikey=process.env.STEAM_API_KEY
const apiSecret=process.env.STEAM_API_SECRET

if(!apikey || !apiSecret){
    console.error("Stream API key or Secret is missing")
}
const streamClient=StreamChat.getInstance(apikey,apiSecret);
