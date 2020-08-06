import React from 'react'
import { Loader } from '../components/Loader';
import { useFetchGet } from '../hooks/useFetchGet';
import { CommandsList } from '../components/CommandsList';

function Home() {
    const apiUrl = 'https://localhost:5001/api/commands';

    const commands = useFetchGet(apiUrl);

    let pageContent;

    if (commands.loading) {
        pageContent =
            <div className="d-flex justify-center mt-15">
                <Loader />
            </div>
    }

    if (commands.error) {
        pageContent =
            <span>
                Something happened. Try again.
            </span>
    }

    if (commands.data) {
        pageContent = <CommandsList commands={commands.data} />;
    }

    return (
        <div>
            <h2 className="mt-10">Commands</h2>
            {pageContent}
        </div>
    );
}

export { Home };
