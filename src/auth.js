import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';

// Google Sign-In
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log('User signed in: ', result.user);
    })
    .catch((error) => {
      console.error('Error during sign in: ', error);
    });
};

// Sign Out
export const signOut = () => {
  firebaseSignOut(auth)
    .then(() => {
      console.log('User signed out');
    })
    .catch((error) => {
      console.error('Error during sign out: ', error);
    });
};
