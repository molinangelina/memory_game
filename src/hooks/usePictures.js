import { useEffect, useState } from "react";

// showing any random page from 1-10
// randomizer for photos
const getRandomPage = () => Math.round(Math.random() * (10 - 1) + 1);

const usePictures = (gameOptions) => {
    /* 
        this is what makes hooks & components reactive
        the pics (holding info) are gonna be changed,
        this will trigger a rerender of components
        setPics is a function to set the variable "pics"
     */
    const [pics, setPics] = useState([]);

    /* 
        - buildUrl is going to build the URL

        - new URL helps with encoding and decoding, 
            preferred format/structure of code to make it "cleaner"

        -'new' keyword in JavaScript is used to create an instance 
            of an object that has a constructor function

        - URL() constructor returns a newly created URL object 
            representing the URL defined by the parameters
    */
    const buildUrl = () => {
        let url = new URL('https://api.pexels.com/v1/search'); // defining base URL

        // helps encode everything properly to avoid errors/issues, helps the browser read the request
        // hardcoding some parts of the URL, but it's also dynamic
        url.search = new URLSearchParams ({
            query: gameOptions.category,
            orientation: 'square',
            per_page: gameOptions.deck / 2, // amount of cards per page
            page: getRandomPage(),
        });

        return url
    };

    // putting fetch in fetchPics function so it can be used in useEffect
    /* describing what's happening:
        -waited for fetch, fetch is a promise
        -once it fetched & got a response; it goes to .then
        -data is the response that is recieved from the API
    */

    const fetchPics = () => {
        // running/fetching the new Url
        fetch(buildUrl(), {
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY,
            },
        })
            .then(res => res.json()) // converting api response(res) into 
            .then(res => setPics(res.photos)); // storing res in setPics & print res 
    };

    // when to run which function
    // do something happening when useGetImages is being called
    // api is now only being called once
    useEffect (() => {
        if (!gameOptions) return
        fetchPics();
    }, [gameOptions]);

    return pics; // return pics from hook
};

export default usePictures;
