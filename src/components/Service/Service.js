import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description } = props.service;


    const handleButton = () => {

    }
    return (
        <div class="col mt-5">
            <div class="card  background text-white">
                <img height="250" width="100" src={img} className="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <Link to={`/service/${id}`}>
                        <button className="btn btn-warning">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;