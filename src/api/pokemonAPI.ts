import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonByName = async (name: string) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${name}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching Pokémon named ${name}:`, error);
        throw error;
    }
};

export const fetchAllPokemon = async (limit: number = 2000, offset: number = 0) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon`, {
            params: {
                limit,
                offset
            }
        });
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Pokémon list:", error);
        throw error;
    }
};

export const fetchPokemonFromUrl = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch Pokémon from provided URL:", error);
        throw error;
    }
};