export class User {
    private _idUser?: String;
    private firstnameUser?: String;
    private lastnameUser?: String;
    private emailUser: String;
    private passwordUser: String;
    private dateUser?: String;
    private tokenUser?: String;

    get _id(): String {
        return this._idUser;
    }

    set _id(_id: String) {
        this._idUser = _id;
    }

    get firstname(): String {
        return this.firstnameUser;
    }

    set firstname(firstname: String) {
        this.firstnameUser = firstname;
    }

    get lastname(): String {
        return this.lastnameUser;
    }

    set lastname(lastname: String) {
        this.lastnameUser = lastname;
    }

    get email(): String {
        return this.emailUser;
    }

    set email(email: String) {
        this.emailUser = email;
    }

    get password(): String {
        return this.passwordUser;
    }

    set password(password: String) {
        this.passwordUser = password;
    }

    get date(): String {
        return this.dateUser;
    }

    set date(date: String) {
        this.dateUser = date;
    }

    get token(): String {
        return this.tokenUser;
    }

    set token(token: String) {
        this.tokenUser = token;
    }
}
