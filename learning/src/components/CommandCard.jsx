import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function CommandCard(props) {
    return(
        <Link to={`/commands/${props.command.id}`}>
            <div className="card row justify-between">
                <span>
                    {props.command.howTo}
                </span>
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className='margin-auto0'
                />
            </div>
        </Link>
    );
}

export { CommandCard }