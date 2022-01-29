let globalIdCounter = 0;


class Userlist {
    constructor() {
        this.userList = []
    }
    addUser(fullName, userName, email, picURL) {

        let nU = new User(fullName, userName, email, picURL);
        nU.id = globalIdCounter + 1;
        globalIdCounter++;
        this.userList.push(nU);
    }
    deleteUser(i) {
        this.userList.splice(i, 1);
    }
    getList() {
        return this.userList;
    }
}

class User {
    constructor(fullName, userName, email, picURL) {
        this.id = 0;
        this.fullName = fullName;
        this.userName = userName;
        this.email = email;
        this.isImage = false;
        this.imageUrl = picURL;
    }

    getId() {
        return this.id;
    }
    getName() {
        return this.fullName;
    }
    setName(string) {
        this.fullName = string;
    }
    getUser() {
        return this.userName;
    }
    setuser(string) {
        this.userName = string;
    }
    getEmail() {
        return this.email;
    }
    setEmail(string) {
        this.email = string;
    }
    getImage() {
        return this.isImage
    }
    setImage() {
        if (this.imageUrl !== "") {
            this.isImage = true;
        } else {
            this.isImage = false;
        }
    }

    getImageUrl() {
        return this.imageUrl;
    }
    setImageUrl(string) {
        this.imageUrl = string;
        this.setImage()
    }
}

let myUserList = new Userlist;
myUserList.addUser("Kiss Jolan", "Joli", "ajoli@example.com", "http://www.placecage.com");
myUserList.addUser("Nagy Fero", "csotany", "OVALAVJU@ezgaz.huuu", "");
myUserList.addUser("Pelda Bela", "pelus", "example@example.com", "http://www.placecage.com");
myUserList.addUser("Kiss Joco", "Joci", "ajoci@example.com", "");
myUserList.addUser("Kiss Fero", "csoti", "kis(z)titkar@ogy.jajj", "");
myUserList.addUser("Pelda Geza", "kispelus", "example2@example1.com", "https://stevensegallery.com");





