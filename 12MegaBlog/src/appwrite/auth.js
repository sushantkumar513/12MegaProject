import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, passowrd, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, passowrd, name);
            if (userAccount) {
                // call another method
            } else  {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService