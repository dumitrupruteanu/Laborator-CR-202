import React, {useState} from 'react';
import './App.css';
import {Layout, Menu, theme, Input, Form, Button, Card} from 'antd';
import FormItem from "antd/es/form/FormItem";
import {Vietati} from "./InfInterface";
import AddCardsList from "./providerStore";

const { Header, Content, Footer, Sider } = Layout;

interface Menu{
    key: string;
    label: string;
    link: string;
    cardsCathegory: number;
}

const menuChoose: Menu[] = [
    {key: '1', label: 'Acasa', link: '#', cardsCathegory: 1},
    {key: '2', label: 'Mamifere', link: '#', cardsCathegory: 2},
    {key: '3', label: 'Pesti', link: '#', cardsCathegory: 3},
    {key: '4', label: 'Reptile', link: '#', cardsCathegory: 4}
];

const carduriInterface: Vietati[] =[
    {id: 1, title: 'Tigrul', content: 'Tigrul este o specie de mamifere carnivore din familia felidelor, fiind una dintre cele cinci specii ale genului Panthera. Este cel mai mare reprezentant al subfamiliei Pantherinae și unul dintre cei mai mari răpitori tereștri (după ursul polar și cel brun). Dimensiunile unui tigru siberian la vârsta de 6 luni sunt comparabile cu cele ale unui leopard adult.', height: parseFloat("1.2"), cathegory: 2, family: 'Felidae', regn: 'Animalia', ordin: 'Therapsida'},
    {id: 2, title: 'Leopardul', content: 'Leopardul este una dintre cele cinci specii existente din genul Panthera, membru al familiei Felidae. Arealul său de răspândire este Africa sub-sahariană, unele părți din Asia de vest și centrală, Rusia de sud și subcontinentul indian până în Asia de sud-est și de est.</', height: parseFloat("0.6"), cathegory: 2, family: 'Felidae', regn: 'Animalia', ordin: 'Carnivora'},
    {id: 3, title: 'Ghepard', content: 'Ghepardul este o felină mare (familia Felidae, subfamilia Felinae) care poate fi întâlnită în aproape toată Africa și Asia de Sud-Vest până în India. Ghepardul este un cățărător modest, vânând prada prin viteza alergării sale și nu prin agilitatea săriturii', height: parseFloat('0.8'), cathegory: 2, family: 'Felidae', regn: 'Animalia', ordin: 'Carnivora'},
    {id: 4, title: 'Somnul', content: 'Somnul este o specie de pește răpitor de talie mare din familia Siluridae. El este răspândit mai ales în Europa Centrală și Europa de Est, dar și în Asia de Vest putând fi întâlnit și în Afganistan sau Kazahstan. Somnul trăiește frecvent în bălți, lacuri, pe cursul inferior al fluviilor mai mari, ca și la gura lor de vărsare în Marea Baltică, Marea Neagră, Marea Caspică. ', height: parseFloat("0.2"), cathegory: 3, family: 'Siluridae', regn: 'Animalia', ordin: 'Siluriformes'},
    {id: 5, title: 'Caras', content: 'Carasul este cel mai cunoscut și răspândit pește de apă dulce din România. El face parte din clasa Actinopterygii, ordinul Cypriniformes, familia Cyprinidae. Carasul este originar din Asia de Nord, de unde s-a răspândit în toată China ca pește ornamental, iar mai apoi în întreaga lume', height: parseFloat("0.1"), cathegory: 3, family: 'Cyprinidae', regn: 'Animalia', ordin: 'Cypriniformes'},
    {id: 6, title: 'Bibanul', content: 'Bibanul (lat. Perca fluviatilis), popular: costrăș, bondroș, ghiban este numele dat speciilor din genul Perca, grup de pești gregari răpitori de apă dulce, răspândiți nativ în Europa (exceptând Spania, Italia, Grecia) și Asia. A fost introdus în Australia, Noua Zeelandă și Africa de Sud.', height: parseFloat("0.1"), cathegory: 3, family: 'Percidae', regn: 'Animalia', ordin: 'Perciformes'},
    {id: 7, title: 'Crocodilul', content: 'Crocodilia un ordin de reptile mari prădătoare, semiacvative. Ei au apărut acum 83,5 milioane de ani în cretacicul târziu, și împreună cu păsările, constituie ultimii urmași ai Arhozaurienilor, o categorie de dinozauri', height: parseFloat("0.15"), cathegory: 4, family: 'Crocodylidae', regn: 'Animalia', ordin: 'Crocodilia'},
    {id: 8, title: 'Broasca-Testoasa', content: 'Este adaptată la mediul terestru. În România, trăiește în pădurile și regiunile de stepă din Oltenia, Banat și Dobrogea. Speciile întâlnite în România sunt țestoasa de uscat bănățeană sau țestoasa lui Hermanni (Testudo hermanni) și țestoasa de uscat dobrogeană (Testudo graeca)', height: parseFloat("0.2"), cathegory: 4, family: 'Chelonidelor', regn: 'Animalia', ordin: 'Testudines'},
    {id: 9, title: 'Anaconda', content: 'Anaconda este un șarpe constrictor semi-acvatic care trăiește în America de Sud (Orinoco, Argentina, Venezuela etc.). Este cel mai mare șarpe din lume și poate atinge 10-12 m lungime; el poate înghiți hrană cu un diametru aproape triplu față de cel al corpului său.', height: parseFloat("0.1"), cathegory: 4, family: 'Boidae', regn: 'Animalia', ordin: 'Squamata'}
]

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [activeCards, setActiveCards] = useState(1);
    const handleChooseClick = (item: Menu) => {
        setActiveCards(item.cardsCathegory);
    }

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [grupa, setGrupa] = useState('');


    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {menuChoose.map(itemCard => (
                        <Menu.Item key={itemCard.key} onClick={() => handleChooseClick(itemCard)}>
                            <a href={itemCard.link}>{itemCard.label}</a>
                        </Menu.Item>
                    ))}
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {carduriInterface.map(actCard => (
                            <Card key={actCard.id} title={actCard.title} style={{width: 1150}}
                                  className={actCard.cathegory === activeCards ? '' : 'ascuns'}>
                                <p className="text">{actCard.content}</p>
                                <p className="text"> <b>Familia</b>: {actCard.family}</p>
                                <p className="text"> <b>Inaltimea</b>: {actCard.height} metri</p>
                                <p className="text"> <b>Regnul</b>: {actCard.regn}</p>
                                <p className="text"> <b>Ordinul</b>: {actCard.ordin}</p>
                            </Card>
                        ))}
                        <Form>
                            <FormItem>
                                Nume: <Input
                                placeholder="Numele"
                                type="text"
                                required
                                value = {nume}
                                onChange={(e) => setNume(e.target.value)}
                            />
                            </FormItem>
                            <FormItem>
                                Prenume: <Input
                                placeholder="Prenumele"
                                type="text"
                                required
                                value = {prenume}
                                onChange = {(e) => setPrenume(e.target.value)}
                            />
                            </FormItem>
                            <FormItem>
                                Grupa: <Input
                                placeholder="Grupa"
                                type="text"
                                required
                                value = {grupa}
                                onChange = {(e) => setGrupa(e.target.value)}
                            />
                            </FormItem>
                            <Form.Item>
                                <Button type="primary" onClick={() => alert( "Salut. Ma numesc " + nume + " " + prenume + " si " +
                                    "sunt din grupa " + grupa )}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Content>
            <AddCardsList/>
            <Footer style={{ textAlign: 'center' }}>Creat de către Pruteanu Dumitru, student grupa CR-202.</Footer>
        </Layout>

    );
};

export default App;
