const API_NOTIFICATION_MESSAGES = {
    loading:{
        title:'loading',
        message:'Data is being loading, please wait'
    },
    success:{
        title:'success',
        message:'Data SUcessfully Loaded'
    },
    responseFailure:{
        title:'Error',
        message:'an error occured while fetching response from the server. plese try again'
    },
    requestFailure:{
        title:'Error',
        message:'an error occured while parsing request data'
    },
    networkError:{
        title:'Error',
        message:'unable to connect to server, please check internet connectivity'
    }
}
export const SERVICE_URLS = {
    userSignup: { url:'/signup', method:'POST'}
}