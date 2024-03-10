import GridLayout from '@/components/grid-layout';
import { TextInput } from '@/components/text-input';
import {
    addDoc,
    collection,
    getFirestore,
    limit,
    onSnapshot,
    orderBy,
    query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { app } from './_app';
import Image from 'next/image';
import styles from './contact.module.css';
import sendImage from '../../public/arrow.svg';

const db = getFirestore(app);

interface Item {
    title: string;
    text: string;
    uid: string;
    createdAt: number;
}

export default function Diary() {
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [diaries, setDiary] = useState();
    const chat = collection(db, 'diary');
    let uid = '';
    if (typeof window !== 'undefined') {
        uid = localStorage.getItem('uid')!!;
    }

    useEffect(() => {
        const q = query(chat, orderBy('createdAt'), limit(50));
        (async () => {
            onSnapshot(q, async (snapshot) => {
                let plm: any = [];
                snapshot.forEach((doc) => {
                    plm.push(doc.data());
                });
                setDiary(plm);
            });
        })();
    }, []);

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setMessage('');
        await addDoc(chat, {
            title: title,
            text: message,
            uid: localStorage.getItem('uid')!!,
            createdAt: Date.now(),
        });
    };

    return (
        <div className="card mx-5">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className={`form-control ${styles.inputField}`}
                            placeholder="Title"
                            value={title}
                            onChange={(e: any) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <div className="col-9">
                            <input
                                type="text"
                                className={`form-control ${styles.inputField}`}
                                placeholder="Type your message here..."
                                value={message}
                                onChange={(e: any) =>
                                    setMessage(e.target.value)
                                }
                            />
                        </div>
                        <div className="col-3 d-flex align-items-center justify-content-center">
                            <button
                                className="mt-3 pt-2 border-0 bg-transparent rounded-circle"
                                type="submit">
                                <Image src={sendImage} alt="send" />
                            </button>
                        </div>
                    </div>
                </form>

                <div className="row mt-4">
                    {diaries &&
                        diaries.map((diary, index) => (
                            <div key={index} className="col-4 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {diary.title}
                                        </h5>
                                        <p className="card-text">
                                            {diary.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
