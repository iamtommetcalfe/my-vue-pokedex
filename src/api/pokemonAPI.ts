// src/api/pokemonAPI.ts

import axios from 'axios';

export const getPokemonByName = async (name: string) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching Pokémon:", error);
        throw error;
    }
};

export const fetchAllPokemon = async (limit: number = 10, offset: number = 0) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
        throw error;
    }
};

export async function fetchPokemonFromUrl(url: string) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        return data; // Return the list of Pokémon and any other necessary data
    } else {
        throw new Error('Failed to fetch Pokémon from given URL');
    }
}