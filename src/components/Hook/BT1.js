import { useState } from 'react';
import React, { Component } from 'react';

function BT1 () {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
        return (
            <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            </>
        );
    }


export default BT1;