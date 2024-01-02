import React, { FC, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './header';
import jokes from '../data/jokes';
import { Joke } from '../data/types';
type WrapperProps = {
    children: any;
};

const Jokes: FC<WrapperProps> = () => {
    const navigate = useNavigate();
    const currentLocation = useLocation();

    if (currentLocation.state !== "qr") navigate("/")

    const [selectedJoke, setSelectedJoke] = useState<Joke | null>(null);
    const [selectedSex, setSelectedSex] = useState<string | null>(null);
    const [selectedDrink, setSelectedDrink] = useState<string | null>(null);

    const shuffle = <T,>(array: T[]):T[] => {
        for (let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i+1));
            [array[i],array[j]] = [array[j],array[i]];
        }
        return array;
    }
    const getSelectedSex = (key: string | null) => {
        switch (key) {
            case 'M1':
                return 'Man';
            case 'W1':
                return 'Woman';
            case 'X1':
                return 'Confused';
            default:
                return '';
        }
    };
    const getSelectedDrink = (key: string | null) => {
        switch (key) {
            case 'W2':
                return 'Whiskey';
            case 'G2':
                return 'Gin';
            case 'X2':
                return 'Whatever it Takes';
            default:
                return '';
        }
    };

    const handleButtonClick = (category: string, option: string) => {
        if (category === "SEX") setSelectedSex(option);
        if (category === "DRINK") setSelectedDrink(option);
    }

    useEffect(() => {
        const filterJoke = jokes.filter(f => f.category.match(selectedSex ?? "")).filter(f => f.category.match(selectedDrink ?? ""));
        
        if (filterJoke.length > 0) {            
            const randomNumber = Math.floor(Math.random() * filterJoke.length);
            setSelectedJoke(shuffle(filterJoke)[randomNumber]);
        }
        else setSelectedJoke(null);

    }, [selectedSex, selectedDrink]);

    return (
        <Header>
            <div className='jokes-logo'>
                <a href="/">
                    <span style={{ position: "absolute", width: '100%', height: '100%', left: 0 }} />
                </a>
                <div className='jokes-container'>
                    {!selectedSex && !selectedDrink && (
                        <p >Joke for you!</p>
                    )}

                    <p >I am a {getSelectedSex(selectedSex)}</p>
                    {selectedSex && (
                        <p>AND</p>
                    )}
                    {/* Choose sex*/}
                    {!selectedSex && !selectedDrink && (
                        <div style={{ display: 'flex' }}>

                            <button style={{ marginRight: "5px" }} onClick={() => handleButtonClick("SEX", "M1")}>Man</button>
                            <button onClick={() => handleButtonClick("SEX", "W1")}>Woman</button>
                            <button style={{ marginLeft: "5px" }} onClick={() => handleButtonClick("SEX", "X1")}>I don't know yet</button>
                        </div>
                    )}

                    {selectedSex && (
                        <p>I drink {getSelectedDrink(selectedDrink)}</p>
                    )}
                    {/* Choose drink*/}
                    {selectedSex && !selectedDrink && (
                        <div style={{ display: 'flex' }}>
                            <button style={{ marginRight: "5px" }} onClick={() => handleButtonClick("DRINK", "W2")}>Whiskey</button>
                            <button onClick={() => handleButtonClick("DRINK", "G2")}>Gin</button>
                            <button style={{ marginLeft: "5px" }} onClick={() => handleButtonClick("DRINK", "X2")}>I don't care</button>
                        </div>
                    )}

                    {/* Display selected message*/}
                    {selectedSex && selectedDrink && (
                        <div className='jokes-display'>
                            <p className='question'>{selectedJoke && selectedJoke.question}</p>
                            <p className='anwser'>{selectedJoke && selectedJoke.anwser}</p>
                            <p>Have a Drink on Me!</p>
                        </div>

                    )
                    }
                </div>

            </div>


        </Header >

    );
};

export default Jokes;
