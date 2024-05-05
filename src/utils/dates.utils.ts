import moment from "moment"

export const CURRENT_TIMESTAMP = () => {
   return moment().format('YYYY-MM-DD HH:mm:ss');
}