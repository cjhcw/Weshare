import axios from "axios";
export default {
  /**用户登录 */
  async userLogin(data) {
    return axios.post("/api/user/login", data);
  },
  async userRegist(data) {
    return axios.post("/api/user/register", data);
  },
  async getUserInfo(uid) {
    console.log("uidtypeof", typeof uid);
    return axios.get("/api/user/get_user_info", {
      params: {
        uid: parseInt(uid)
      }
    });
  },
  async editUserInfo(data) {
    return axios.post("/api/edit_user_info", data);
  }
};
