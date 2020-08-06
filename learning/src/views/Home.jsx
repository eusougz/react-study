import React, { useState, useEffect } from 'react'
import { CommandCard } from '../components/CommandCard';
import { Loader } from '../components/Loader';

function Home() {

    const [commands, setCommands] = useState({
        loading: false,
        data: null
    });

    const apiUrl = 'https://localhost:5001/api/commands';

    useEffect(() => {
        setCommands({
            loading: true,
            data: null
        });

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setCommands({
                loading: false,
                data
            }));
    }, [apiUrl]);


    let pageContent;

    if (commands.loading) {
        pageContent =
            <div className="d-flex justify-center mt-15">
                <Loader />
            </div>
    }

    if (commands.data) {
        pageContent = commands.data.map(command =>
            <CommandCard
                key={command.id}
                command={command}
            />
        );
    }


    return (
        <div>
            <h2 className="mt-10">Commands</h2>
            {pageContent}
        </div>
    );
}

export { Home };
