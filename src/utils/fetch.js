import axios from './axios';
const get = (url, params = {}, cancel_token = null) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
        cancelToken: cancel_token ? cancel_token.token : null,
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          return reject('canceled');
        }
        reject(err);
      });
  });
};

const post = (url, data = {}, header) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const del = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { data })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const api = {
  get,
  post,
  put,
  delete: del,
};

export { get, post, put, del, api };
