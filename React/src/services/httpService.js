import axios from "axios";
// import userService from "./userService";

// axios.defaults.headers.common['x-auth-token'] = userService.getToken();

const http = {
get: axios.get,
post: axios.post,
put: axios.put,
patch: axios.patch,
delete: axios.delete

}


export default http;