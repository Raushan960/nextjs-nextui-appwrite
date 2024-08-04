



import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66af4857001a880afeb5'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
