import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Image from 'next/image';
import Swal from 'sweetalert2';
// import { db } from '../../firebaseConfig';
// import { collection, addDoc } from 'firebase/firestore';
import sendImage from '../../public/arrow.svg';
import styles from './contact.module.css';

export default function Contact() {
    const [name, setName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    // const handleSubmit = async (e) => {
    //     console.log('submit');
    //     e.preventDefault();
    //     console.log(name, street, city, postalCode, phone, email, message);
    //     await addDoc(collection(db, 'contacts'), {
    //         city: city,
    //         email: email,
    //         message: message,
    //         name: name,
    //         phone_number: phone,
    //         postal_code: postalCode,
    //         street: street,
    //     })
    //         .then(() => {
    //             MySwal.fire({
    //                 position: 'center',
    //                 icon: 'success',
    //                 title: 'Mesajul a fost trimis cu succes',
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             }).then((result) => {
    //                 /* Read more about isConfirmed, isDenied below */
    //                 if (result.isConfirmed) {
    //                     Swal.fire('Saved!', '', 'success');
    //                 } else if (result.isDenied) {
    //                     Swal.fire('Changes are not saved', '', 'info');
    //                 }
    //             });
    //         })
    //         .catch((error) => {
    //             MySwal.fire({
    //                 position: 'center',
    //                 icon: 'error',
    //                 title: 'Mesajul nu a putut fi trimis',
    //                 showConfirmButton: false,
    //                 timer: 1500,
    //             }).then((result) => {
    //                 /* Read more about isConfirmed, isDenied below */
    //                 if (result.isConfirmed) {
    //                     Swal.fire('Saved!', '', 'success');
    //                 } else if (result.isDenied) {
    //                     Swal.fire('Changes are not saved', '', 'info');
    //                 }
    //             });
    //         });

    //     setName('');
    //     setStreet('');
    //     setCity('');
    //     setPostalCode('');
    //     setPhone('');
    //     setEmail('');
    //     setMessage('');
    // };

    const [map, setMap] = useState(null);

    const onUnmount = () => {
        setMap(null);
    };

    return (
        <section
            className="contact-section"
            style={{ backgroundColor: '#f5f5f5' }}>
            <Container className="p-5 mb-3">
                <Row>
                    <Col md={12} lg={6} className="text-lg-left">
                        <h2
                            style={{
                                display: 'inline-block',
                                fontWeight: 'bold',
                                color: '#0acf83',
                                textAlign: 'center',
                                width: '100%',
                            }}
                            className="mb-3">
                            Luați legatura cu noi
                        </h2>
                        <hr
                            className="mx-auto"
                            style={{
                                height: '7px',
                                width: '10%',
                                border: 'none',
                                backgroundColor: '#000',
                            }}
                        />
                        <p>
                            Formularul nostru de contact este o modalitate
                            usoara si convenabila de a lua legatura cu echipa
                            noastra. Vom fi bucurosi sa va ascultam intrebarile,
                            sugestiile sau nelamuririle legate de serviciile
                            noastre si suntem pregatiti sa oferim asistenta cat
                            mai prompta si personalizata posibil.
                        </p>
                        <Form className="background-white">
                            <Form.Group className="fw-bold mt-5">
                                <Form.Control
                                    type="text"
                                    placeholder="Nume de contact"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={styles.inputField}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="fw-bold mt-5">
                                <Form.Control
                                    type="text"
                                    placeholder="Strada"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    className={styles.inputField}
                                    required
                                />
                            </Form.Group>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="fw-bold mt-5">
                                        <Form.Control
                                            type="text"
                                            placeholder="Oras"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            className={styles.inputField}
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="fw-bold mt-5">
                                        <Form.Control
                                            type="number"
                                            placeholder="Codul postal"
                                            value={postalCode}
                                            onChange={(e) =>
                                                setPostalCode(e.target.value)
                                            }
                                            className={styles.inputField}
                                            required
                                            pattern="^\d{6}$"
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="fw-bold mt-5">
                                <Form.Control
                                    type="tel"
                                    placeholder="Telefon de contact"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={styles.inputField}
                                    pattern="^(?:\(\+\d{2}\)\s*)?(?:\d{3}[\s-]?\d{3}[\s-]?\d{3}|\d{10})$"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="fw-bold mt-5">
                                <Form.Control
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.inputField}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="fw-bold mt-5">
                                <Form.Control
                                    type="text"
                                    placeholder="Sa discutam despre ideea ta"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={styles.inputField}
                                />
                            </Form.Group>
                            {/* Center button on the middle */}
                            <div className={`text-center ${styles.buttomForm}`}>
                                <button
                                    type="submit"
                                    className="mt-3 pt-2 border-0 bg-transparent rounded-circle">
                                    <Image
                                        src={sendImage}
                                        alt="Principal Image"
                                        className="img-fluid"
                                    />
                                </button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={12} lg={6}>
                        {/* Google maps location */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
