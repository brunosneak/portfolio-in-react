import * as axios from "axios";

const apiFirebase = axios.create({
    baseURL: "https://mon-portfolio-e38ca.firebaseio.com/"
});

export default apiFirebase;