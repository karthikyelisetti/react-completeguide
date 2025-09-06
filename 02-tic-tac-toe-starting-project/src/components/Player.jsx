import { useState } from 'react';

function Player({initialName, psymbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditPlayer() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let editPlayerName = <span className="player-name">{playerName}</span>;
    let editBtn = 'Edit';

    if (isEditing) {
        editPlayerName = <input type='text' required value={playerName} onChange={handleChange} />
        editBtn='Save'
    }

    return (
        <li>
            <span className="player">
                {editPlayerName}
                <span className="player-symbol">{psymbol}</span>
            </span>
            <button onClick={handleEditPlayer}>{editBtn}</button>
        </li>
    )
}

export default Player;