import firebaseApp from "./config";

class Database {
  constructor() {
    this.database = firebaseApp.database();
  }
  update() {}
  create(data, uid) {
    this.database.ref("users/" + uid + "/" + data.id).set(data, (error) => {
      if (error) {
        console.error("create error : " + error);
      }
    });
  }
  delete(uid, id) {
    this.database.ref("users/" + uid + "/" + id).remove((error) => {
      if (error) {
        console.error("delete error : " + error);
      }
    });
  }
  async read(uid, onRead) {
    return await firebaseApp
      .database()
      .ref("/users/" + uid)
      .once("value")
      .then((snapshot) => {
        const value = snapshot.val();
        value && onRead(value);
      })
      .catch((error) => console.log(error));
  }
}
export default Database;
