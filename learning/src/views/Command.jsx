import React from 'react'
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { useFetchGet } from '../hooks/useFetchGet';

function Command() {

    let pageContent;

    const { id } = useParams();

    const apiUrl = `https://localhost:5001/api/commands/${id}`;

    const command = useFetchGet(apiUrl);

    if (command.loading) {
        pageContent =
            <div className="d-flex justify-center mt-15">
                <Loader />
            </div>
    }

    if (command.error) {
        pageContent =
            <span>
                Something happened. Try again.
            </span>
    }

    if (command.data) {
        pageContent = (
            <div className="column">
                <span className="data-title">How to</span>
                <span className="data">{command.data.howTo}</span>

                <span className="data-title">Script</span>
                <span className="data script">{command.data.line}</span>
            </div>
        );
    }

    return (
        <div>
            {pageContent}
        </div>
    );

}

export { Command }