import React from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h2>There are all infrmation You can see!!!</h2>
            <h3>Detail No:{serviceId}</h3>
        </div>
    );
};

export default Detail;