import axios from "axios";

export default (user_id) => {
  const getUser = () => {
    return new Promise(async (resolve, reject) => {
      const { data: user } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + user_id
      );
      resolve(user);
      reject("Hata Oluştu");
    });
  };

  const getPost = () => {
    return new Promise(async (resolve, reject) => {
      const { data: post } = await axios(
        "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
      );
      resolve(post);
      reject("Hata Oluştu");
    });
  };

  Promise.all([getUser(), getPost()]).then(console.log).catch(console.log);
};
