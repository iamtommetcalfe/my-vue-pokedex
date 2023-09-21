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

export const fetchAllPokemon = async (limit: number = 100) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        return response.data.results;
    } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
        throw error;
    }
};