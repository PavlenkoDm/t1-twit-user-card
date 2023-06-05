import { useState } from 'react';

import style from './Filter.module.css';

export const Filter = ({ options, filter }) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionChange = option => {
        setSelectedOption(option);
        filter(option);
    };

    return (
        <div className={style.container}>
            <div className={style.dropdown}>
                <button
                    className={style.toggle}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {selectedOption}
                </button>
                <div
                    className={style.menu}
                    aria-labelledby="dropdownMenuButton"
                >
                    {options.map(option => (
                        <button
                            key={option}
                            className={style.item}
                            onClick={() => handleOptionChange(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
