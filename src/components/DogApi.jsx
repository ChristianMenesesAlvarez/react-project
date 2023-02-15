// https://stackoverflow.com/questions/5859561/getting-the-closest-string-match

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function DogApi() {
    const [allBreeds, setAllBreeds] = useState([]);
    const [randomImage, setRandomImage] = useState('');
    const [imageArray, setImageArray] = useState([]);
    const [inputs, setInputs] = useState({});

    const getAllBreeds = async (filter) => {
        const res = await axios.get('https://dog.ceo/api/breeds/list/all');
        const data = res.data.message;
        const arr = [];
        Object.keys(data).forEach(i => data[i].length === 0 ? arr.push(i) : data[i].forEach(e => arr.push(e + ' ' + i)));
        const filtered = arr.filter(e => e.match(filter))
        return setAllBreeds(filtered);
    }

    const getRandomImage = async () => {
        const res = await axios.get('https://dog.ceo/api/breeds/image/random');
        const data = res.data.message;
        return setRandomImage(data);
    }

    const getBreed = (breed) => {
        const getBreed = breed.split(' ');
        const res = await axios.get('https://dog.ceo/api/breed/' + getBreed[1] + '/images');
        const data = res.data.message;
        return setImageArray(data);
    }

    const handleChange = (e) => {
        const query = e.target.value;
        return !query ? getAllBreeds('') : getAllBreeds(query);
    }

    useEffect(() => {
        getAllBreeds('');
        getRandomImage();
    }, [])

    return (
        <>
            <div className="header-wrapper">
                <div className="random-image">
                    <img src={randomImage.split('\/').slice(5, 6)} alt={randomImage.split('\/').slice(4, 5)} />
                    <button onClick={getRandomImage} >New Random Image</button>
                </div>
                <div className="search-bar">
                    <input placeholder="Search for a breed..." type="text" onChange={handleChange} />
                </div>
            </div>
            <div className="breeds-list">
                {allBreeds.map(i => <button key={i} onClick={() => getBreed(i)}>{i}</button>)}
            </div>
            <div className="image-list">
                {imageArray.map(e => <img key={`${e.split('\/').slice(5, 6)}`} src={e} alt={e.split('\/').slice(4, 5)} ></img>)}
            </div>
        </>
    )
}

