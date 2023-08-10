import { default as instance } from 'axios';
import env from './env';
let axios = instance.create({
  baseURL: env.APP_API || '',
  timeout: 60 * 1000,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
});
axios.CancelToken = instance.CancelToken;
axios.isCancel = instance.isCancel;
export default axios;
