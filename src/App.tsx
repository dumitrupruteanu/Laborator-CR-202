import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
import AddCardsList from './providerStore';
import MenuApi from './MenuApi';
import './App.css';
import LoginFunction from './loginFunction';

interface Menu {
    key: string;
    label: string;
    link: string;
}

interface CardData {
    id: number;
    title: string;
    cathegory: number;
    content: string;
    family: string;
    height: number;
    regn: string;
    ordin: string;
}

const App: React.FC = () => {
    const [colorBgContainer, setColorBgContainer] = useState('');

    const [activeCards, setActiveCards] = useState(1);
    const handleChooseClick = (itemCard: Menu) => {
        setActiveCards(parseInt(itemCard.key, 10));
    };

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [grupa, setGrupa] = useState('');

    const menuChoose: Menu[] = [

        {
            key: '1',
            label: 'Mamifere',
            link: '/option1',
        },
        {
            key: '2',
            label: 'Pesti',
            link: '/option2',
        },
        {
            key: '3',
            label: 'Reptile',
            link: '/option2',
        },


    ];
    const carduriInterface: CardData[] = [
        {
            id: 1,
            title: 'Vietati',
            cathegory: 1,
            content: 'Tigrul',
            family: 'Felidae',
            height: 1,
            regn: 'Animalia',
            ordin: 'Therapsida',
        },
        {
            id: 2,
            title: 'Card 2',
            cathegory: 2,
            content: 'Content for Card 2',
            family: 'Family 2',
            height: 2,
            regn: 'Regn 2',
            ordin: 'Ordin 2',
        },
    ];

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/books">Books</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route
                    path="/Home"
                    element={
                        <div className="items">
                            <Layout>
                                <Layout.Header className="header">
                                    <div className="logo" />
                                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                                        {menuChoose.map((itemCard) => (
                                            <Menu.Item key={itemCard.key} onClick={() => handleChooseClick(itemCard)}>
                                                <Link to={itemCard.link}>{itemCard.label}</Link>
                                            </Menu.Item>
                                        ))}
                                    </Menu>
                                </Layout.Header>
                                <Layout.Content style={{ padding: '0 50px' }}>
                                    <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                                        <Layout.Sider style={{ background: colorBgContainer }} width={200}></Layout.Sider>
                                        <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
                                            {carduriInterface.map((actCard) => (
                                                <Card
                                                    key={actCard.id}
                                                    title={actCard.title}
                                                    style={{ width: 1150 }}
                                                    className={actCard.cathegory === activeCards ? '' : 'ascuns'}
                                                >
                                                    <p className="text">{actCard.content}</p>
                                                    <p className="text">
                                                        <b>Familia</b>: {actCard.family}
                                                    </p>
                                                    <p className="text">
                                                        <b>Inaltimea</b>: {actCard.height} metri
                                                    </p>
                                                    <p className="text">
                                                        <b>Regnul</b>: {actCard.regn}
                                                    </p>
                                                    <p className="text">
                                                        <b>Ordinul</b>: {actCard.ordin}
                                                    </p>
                                                </Card>
                                            ))}
                                            <Form>
                                                <Form.Item>
                                                    Nume:
                                                    <Input
                                                        placeholder="Numele"
                                                        type="text"
                                                        required
                                                        value={nume}
                                                        onChange={(e) => setNume(e.target.value)}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    Prenume:
                                                    <Input
                                                        placeholder="Prenumele"
                                                        type="text"
                                                        required
                                                        value={prenume}
                                                        onChange={(e) => setPrenume(e.target.value)}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    Grupa:
                                                    <Input
                                                        placeholder="Grupa"
                                                        type="text"
                                                        required
                                                        value={grupa}
                                                        onChange={(e) => setGrupa(e.target.value)}
                                                    />
                                                </Form.Item>
                                                <Form.Item>
                                                    <Button
                                                        type="primary"
                                                        onClick={() =>
                                                            alert(
                                                                `Salut. Ma numesc ${nume} ${prenume} si sunt din grupa ${grupa}`
                                                            )
                                                        }
                                                    >
                                                        Submit
                                                    </Button>
                                                </Form.Item>
                                            </Form>
                                        </Layout.Content>
                                    </Layout>
                                </Layout.Content>
                            </Layout>
                            <LoginFunction/>
                        </div>
                    }
                />
                <Route path="/books" element={<MenuApi />} />
            </Routes>
            <AddCardsList />
            <Layout.Footer style={{ textAlign: 'center' }}>
                Creat de către Pruteanu Dumitru, student grupa CR-202.
            </Layout.Footer>
        </Router>
    );
};

export default App;


