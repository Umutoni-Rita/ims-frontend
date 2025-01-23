import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Fetching = () => {

    const [data, setData] = useState('');

    useEffect (() => {
        axios.get('http://127.0.0.1:8000' )
    .then(
        res => {
            setData(res.data);
        }
    )
    .catch(err => {
        console.error("Error fetching data: ", err);
                setData("Error fetching data");
    });
    }, []);

    return(
        <h1>{data}</h1>
    );
}

export default Fetching;
