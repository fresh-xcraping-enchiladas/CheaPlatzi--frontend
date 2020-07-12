import { signUp } from '../../utils/firebase';
import firebase from 'firebase';
import app from '../../utils/app';

// app();

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

it('should dispatch sign up action', async () => {
    await signUp();
    const usrEmailSign = '';

    expect(signUp).toHaveBeenCalled();
});

// describe('Test user Sign Up process', () => {

//     test('Sign Up Function', () => {
//         firebase.auth().createUserWithEmailAndPassword('user@domain.com', '123456')
//             .then((user = firebase.auth.UserCredential) => {
//                 firebase.auth().signInWithEmailAndPassword('user@domain.com', '123456')
//                     .then((signedInUser = firebase.auth.UserCredential) => {
//                         const userInfo = signedInUser.user;
//                         if (userInfo != null) {
//                             expect(userInfo.email).toEqual('user@domain.com');
//                         }
//                     })
//             })
//     }
//     )
// })
