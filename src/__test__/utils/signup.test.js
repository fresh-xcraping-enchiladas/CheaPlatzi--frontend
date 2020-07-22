import { render as stlRender } from '@testing-library/svelte';
import '@testing-library/jest-dom/extend-expect';
import { signUp } from '../../utils/firebase';
import Login from '../../components/Login.svelte';

jest.mock('firebase', () => {
    return {
        initializeApp: jest.fn(() => {
            return {
                auth: jest.fn(() => {
                    return {
                        createUserWithEmailAndPassword: jest.fn((para1, para2) => {
                            return new Promise(function (resolve, reject) {
                                resolve({
                                    email: 'test@test.com',
                                    uid: '12345678abcdefg'
                                });

                                reject({ message: 'error!' });
                            });
                        }),
                        signOut: jest.fn(() => {
                            return new Promise(function (resolve, reject) {
                                resolve('Success');
                                reject({ message: 'error!' });
                            });
                        }),
                        onAuthStateChanged: jest.fn(() => {
                            return {
                                email: 'test@test.com',
                                uid: '12345678abcdefg'
                            };
                        }),
                        signInWithEmailAndPassword: jest.fn((para1, para2) => {
                            return new Promise(function (resolve, reject) {
                                reject({ message: 'error!' });
                            });
                        }),
                    };
                })
            };
        })
    };
});
