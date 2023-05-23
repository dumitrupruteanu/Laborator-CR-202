
import { useState } from 'react';
import { Layout, Menu, Card, Form, Input, Button } from 'antd';
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

type MenuItemKey = 'Mamifere' | 'Pesti' | 'Reptile';

const menuItems: { key: MenuItemKey, icon: JSX.Element, label: string }[] = [
    { key: 'Mamifere', icon: <UploadOutlined rev={undefined} />, label: 'Mamifere' },
    { key: 'Pesti', icon: <UserOutlined rev={undefined} />, label: 'Pesti' },
    { key: 'Reptile', icon: <VideoCameraOutlined rev={undefined} />, label: 'Reptile' },
];

const App: React.FC = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItemKey>('Mamifere');

    const handleMenuSelect = (event: any) => {
        setSelectedMenuItem(event.key);
    };

    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');
    const [grupa, setGrupa] = useState('');

    const renderCards = () => {
        switch (selectedMenuItem) {
            case 'Mamifere':
                return (
                    <>
                        <Card title="Tigru" style={{ marginBottom: '16px' }}>
                            <p>Tigrul este o specie de mamifere carnivore din familia felidelor, fiind una dintre cele cinci specii ale genului Panthera. Este cel mai mare reprezentant al subfamiliei Pantherinae și unul dintre cei mai mari răpitori tereștri (după ursul polar și cel brun). Dimensiunile unui tigru siberian la vârsta de 6 luni sunt comparabile cu cele ale unui leopard adult.</p>
                        </Card>
                        <Card title="Leopard">
                            <p>Leopardul este una dintre cele cinci specii existente din genul Panthera, membru al familiei Felidae. Arealul său de răspândire este Africa sub-sahariană, unele părți din Asia de vest și centrală, Rusia de sud și subcontinentul indian până în Asia de sud-est și de est.</p>
                        </Card>
                        <Card title="Ghepard">
                            <p>Ghepardul este o felină mare (familia Felidae, subfamilia Felinae) care poate fi întâlnită în aproape toată Africa și Asia de Sud-Vest până în India. Ghepardul este un cățărător modest, vânând prada prin viteza alergării sale și nu prin agilitatea săriturii.</p>
                        </Card>
                    </>
                );
            case 'Pesti':
                return (
                    <>
                        <Card title="Somn">
                            <p>Somnul este o specie de pește răpitor de talie mare din familia Siluridae. El este răspândit mai ales în Europa Centrală și Europa de Est, dar și în Asia de Vest putând fi întâlnit și în Afganistan sau Kazahstan. Somnul trăiește frecvent în bălți, lacuri, pe cursul inferior al fluviilor mai mari, ca și la gura lor de vărsare în Marea Baltică, Marea Neagră, Marea Caspică. </p>
                        </Card>
                        <Card title="Caras">
                            <p>Carasul este cel mai cunoscut și răspândit pește de apă dulce din România. El face parte din clasa Actinopterygii, ordinul Cypriniformes, familia Cyprinidae. Carasul este originar din Asia de Nord, de unde s-a răspândit în toată China ca pește ornamental, iar mai apoi în întreaga lume.</p>
                        </Card>
                    </>

                );

            case 'Reptile':
                return (
                    <>
                        <Card title="Crocodilul">
                            <p>Crocodilia un ordin de reptile mari prădătoare, semiacvative. Ei au apărut acum 83,5 milioane de ani în cretacicul târziu, și împreună cu păsările, constituie ultimii urmași ai Arhozaurienilor, o categorie de dinozauri.</p>
                        </Card>
                        <Card title="Broasca-Testoasa">
                            <p>Este adaptată la mediul terestru. În România, trăiește în pădurile și regiunile de stepă din Oltenia, Banat și Dobrogea. Speciile întâlnite în România sunt țestoasa de uscat bănățeană sau țestoasa lui Hermanni (Testudo hermanni) și țestoasa de uscat dobrogeană (Testudo graeca).</p>
                        </Card>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
                <div className="logo" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['Mamifere']}
                    mode="inline"
                    onSelect={handleMenuSelect}
                >
                    {menuItems.map(({ key, icon, label }) => (
                        <Menu.Item key={key} icon={icon}>
                            {label}
                        </Menu.Item>
                    ))}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '0 16px' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 155 }}>
                        {renderCards()}
                    </div>

                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Numele"
                            name="name"
                            rules={[{ required: true, message: 'Introduceti numele!' }]}
                        >
                            <Input
                                value = {prenume}
                                onChange = {(e) => setPrenume(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Prenumele"
                            name="surname"
                            rules={[{ required: true, message: 'Introduceti prenumele!' }]}
                        >
                            <Input
                                value = {nume}
                                onChange = {(e) => setNume(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            label="Grupa"
                            name="grupa"
                            rules={[{ required: true, message: 'Introduceti grupa!!!' }]}
                        >
                            <Input
                                value = {grupa}
                                onChange = {(e) => setGrupa(e.target.value)}/>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit" onClick={() => {
                                alert("Numele/prenumele: " + nume + " " + prenume + "\nGrupa: " + grupa)
                                console.log(nume + " " + prenume + " " + grupa)
                            }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>

                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
