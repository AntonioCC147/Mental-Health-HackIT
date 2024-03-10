import '../pages/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';

import { initializeApp } from 'firebase/app';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const firebaseConfig = {
    apiKey: 'AIzaSyCnzyQRUQjz-DMpRQJNxIYtPB4_cRNvXkA',
    authDomain: 'mental-health-app-e3d48.firebaseapp.com',
    projectId: 'mental-health-app-e3d48',
    storageBucket: 'mental-health-app-e3d48.appspot.com',
    messagingSenderId: '253972253487',
    appId: '1:253972253487:web:9e794edc8ed26dbb532fda',
    measurementId: 'G-8ZNKKV9PHR',
};
export const app = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {' '}
            <Navbar />
            <Component {...pageProps} />
        </>
    );
}
