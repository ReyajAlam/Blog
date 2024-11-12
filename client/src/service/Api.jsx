import axios from 'axios';
import { API_NOTIFICATION_MESSAGES } from '../constants/Config.jsx';

const API_URL = 'http//localjost:8000';

const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout: 10000,
    headers:{
        "contant-type":"application/json"
    }
})
axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        //stop globle loader here
        return processResponse(Response);

    },
    function(error){
        //stop glole loader here
        return Promise.reject(processError(error));
    }
)

//if success => return { issuccess true, data: object}
// if fail-> return : true, status : string, msg : string, code: int

const processResponse = (response) => {
    if(response?.status ===200){
        return{isSucess:true, data:response.data}
    } else{
        return{
            isFAailure: true,
            status:response?.status,
            msg:response?.msg,
            code:response?.code
        }
    }
}

const processError = (error) => {
    if(error.response){
    //response made and server responde with a server other 
    //that fails out of the range 2.x.x
    if (error.response?.status === 403){
        
    }
    
    }else if(error.request){
        //request made but no response was decleaderd
    }else{
        //something happended  in setting up request that triggers an error
    }
}