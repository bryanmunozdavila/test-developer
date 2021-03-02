import React from 'react';
import './../assets/stylesheets/home.scss';

import { Button, TextField } from '@material-ui/core';

export const HomePage= () => {

    return (
        <>
            <div className="search-area">
                <TextField className="input-field" label="buscar usuario"/>
                <Button variant="contained" color="primary">
                    Buscar
                </Button>
            </div>
        </>
    );
};