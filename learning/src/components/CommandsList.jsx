import React, { useEffect, useState } from 'react';
import { CommandCard } from './CommandCard';

function CommandsList(props) {

    const [commandsList, setCommandsList] = useState(null);
    
    useEffect(() => {
        setCommandsList(props.commands
            .map(command =>
                <CommandCard
                    key={command.id}
                    command={command}
                />
            ));
    }, [props.commands])

    return commandsList;
}

export { CommandsList };