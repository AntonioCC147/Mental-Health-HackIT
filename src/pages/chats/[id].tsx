import React, { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, getFirestore, limit, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import { app } from '../_app'

const db = getFirestore(app);

interface ChatMessage {
    text: string;
    uid: string;
    createdAt: number;
}

const Chat = () => {
    const chat = collection(db, "chat-test");
    let uid = ""
    if (typeof window !== 'undefined') {
        uid = localStorage.getItem("uid")!!;
    }

    const [messages, setMessages] = useState<ChatMessage[]>([]);

    useEffect(() => {
        const q = query(
            chat,
            orderBy("createdAt"),
            limit(50)
        );
        (async () => {
            onSnapshot(q, async (snapshot) => {
                let plm: any = [];
                snapshot.forEach(doc => {
                    plm.push(doc.data());
                });
                console.log(plm)
                setMessages(plm)
            });
        })()
    }, [])
    const [newMessage, setNewMessage] = useState('');


    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setMessages([...messages, { text: newMessage, uid: localStorage.getItem("uid")!!, createdAt: Date.now() }]);
        setNewMessage('');
        await addDoc(chat, { text: newMessage, uid: localStorage.getItem("uid")!!, createdAt: Date.now() })
    };

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center mb-4">Chat UI</h1>
                        <div className="messages">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`message ${message.uid === uid ? 'my-message' : ''
                                        }`}>
                                    <p className="text-secondary">
                                        {message.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <form className="message-form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your message here..."
                                    value={newMessage}
                                    onChange={(e) =>
                                        setNewMessage(e.target.value)
                                    }
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-primary"
                                        type="submit">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
