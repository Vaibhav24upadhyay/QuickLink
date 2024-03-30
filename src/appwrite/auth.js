import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);        
    }
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log("Account : ", userAccount);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            console.log("asdfghjk")
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService






// import conf from '../conf/conf.js';
// import {Client, Account, ID} from 'appwrite'
// class AuthService 
// {
//     // creating account using appwrite
//     client = new Client();
//     account;
//     constructor()
//     {
//         this.client.setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwritepProjectId);
//         this.account = new Account(this.client);
//     }
//     async createAccount({email,password,name})
//     {
//         try{
//            const userAccount = await this.account.create(ID.unique(), email, password, name);
//            if(userAccount)
//             {
//                 // account create so directly call logged in
//                 return this.login({email,password})
//             }
//             else
//             {
//                 return userAccount; 
//             }
//         }
//         catch(e){
//             throw e;
//         }
//     }

//     async login({email, password})
//     {
//         try{
//             return await this.accountcreteEmailSessions(email,password);
//         }catch(e){
//             throw e;
//         }
//     }
//     async getCurrentUser()
//     {
//         try{
//             return await this.account.get();
//         }catch(e){
//             console.log("GET_CURRECT_USER_ERROT : ",e);
//         }
//         return null;
//     }
//     async logout(){
//         try{
//             return await this.account.deleteSessions();
//         }catch(e){
//             console.log("LOGOUT_ERROR : ",e);
//         }
//     }
// }
// const authService = new AuthService();
// export default authService;


