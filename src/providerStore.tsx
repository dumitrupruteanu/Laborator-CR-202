import React, { useState, useEffect } from 'react';
import './providerStoreCSS.css';


interface AddCardsListProps {}

interface newCard{
    nume: string;
    descriere: string;
    categorie: number;
    regn: string;
    familia: string;
    ordinul: string;
    inaltime: number
}

const AddCardsList: React.FC<AddCardsListProps> = () => {
    const [cards, setCards] = useState<newCard[]>([]);
    const [userValue, setUserValue] = useState<newCard>({ nume: '', descriere: '', categorie: 0, regn: '', familia: '', ordinul: '', inaltime: 0 });
    const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

    useEffect(() => {
        const cardToCreate = JSON.parse(localStorage.getItem('cardsToAdd') || '[]') as newCard[];
        if (cardToCreate) {
            setCards(cardToCreate);
        }
    }, []);

    const addNewCard = () => {
        if (userValue.nume && userValue.descriere) {
            const newItems = [...cards, userValue];
            setCards(newItems);
            setUserValue({ nume: '', descriere: '', categorie: 0, regn: '', familia: '', ordinul: '', inaltime: 0});
            localStorage.setItem('cardsToAdd', JSON.stringify(newItems));
        }
    };

    const deleteSpecifiedCard = (index: number) => {
        setDeleteIndex(index);
        setTimeout(() => {
            const remainedItems = [...cards];
            remainedItems.splice(index, 1);
            setCards(remainedItems);
            localStorage.setItem('cardsToAdd', JSON.stringify(remainedItems));
            setDeleteIndex(null);
        }, 2000);
    };

    return (
        <div className="listaCreata">
        <h1 className="textForAdaugare">Lista cardurilor adăugate pe pagină</h1>
    <div>
    <input className="userInput"
    value={userValue.nume}
    onChange={(e) =>
    setUserValue({ ...userValue, nume: e.target.value })
}
    placeholder="Introduceti numele"
    />
    <input
        className="userInput"
    value={userValue.descriere}
    onChange={(e) =>
    setUserValue({ ...userValue, descriere: e.target.value })
}
    placeholder="Introduceti descrierea"
    />
    <input
        className="userInput"
    type={"number"}
    value={userValue.categorie}
    onChange={(e) =>
    setUserValue({ ...userValue, categorie: parseInt(e.target.value) })
}
    placeholder="Introduceti categoria"
    />
    <input
        className="userInput"
    value={userValue.regn}
    onChange={(e) =>
    setUserValue({ ...userValue, regn: e.target.value })
}
    placeholder="Introduceti regnul"
    />
    <input
        className="userInput"
    value={userValue.familia}
    onChange={(e) =>
    setUserValue({ ...userValue, familia: e.target.value })
}
    placeholder="Introduceti familia"
    />
    <input
        className="userInput"
    value={userValue.ordinul}
    onChange={(e) =>
    setUserValue({ ...userValue, ordinul: e.target.value })
}
    placeholder="Introduceti ordinul"
    />
    <input
        className="userInput"
    type={"number"}
    value={userValue.inaltime}
    onChange={(e) =>
    setUserValue({ ...userValue, inaltime: parseFloat(e.target.value) })
}
    placeholder="Introduceti înălțimea"
    />
    <button className="butonDeAdaugare" onClick={addNewCard}>
        Adaugă un card
    </button>
    </div>
    <ul className={"horizontalList"}>
    {cards.map((card: newCard, position: number) => (
            <li key={position} className="itemAdaugat">
        <p className={"descriere"}> <b> Nume - </b>  {card.nume} </p>
    <p className={"descriere"}> <b> Descriere - </b> {card.descriere} </p>
    <p className={"descriere"}> <b> Categorie - </b> {card.categorie} </p>
    <p className={"descriere"}> <b> Regn - </b> {card.regn} </p>
    <p className={"descriere"}> <b> Familia - </b> {card.familia} </p>
    <p className={"descriere"}> <b> Ordinul - </b> {card.ordinul} </p>
    <p className={"descriere"}> <b> Înălțime - </b> {card.inaltime} </p>
    <button
        className="deleteButton"
    onClick={() => deleteSpecifiedCard(position)}
    disabled={deleteIndex === position}
>
    {deleteIndex === position ? (
        <div className="Spinner"></div>
    ) : (
        'Șterge'
    )}
    </button>
    </li>
))}
    </ul>
    </div>
);
};

export default AddCardsList;
