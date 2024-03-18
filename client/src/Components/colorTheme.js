export const colorTheme = (type) => {
    const theme = {
        fire: { bg: 'bg-red-500', text: 'text-red-500' },
        water: { bg: 'bg-blue-500', text: 'text-blue-500' },
        grass: { bg: 'bg-green-500', text: 'text-green-500' },
        electric: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
        ice: { bg: 'bg-blue-300', text: 'text-blue-300' },
        fighting: { bg: 'bg-red-700', text: 'text-red-700' },
        poison: { bg: 'bg-purple-500', text: 'text-purple-500' },
        ground: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
        flying: { bg: 'bg-blue-300', text: 'text-blue-300' },
        psychic: { bg: 'bg-pink-500', text: 'text-pink-500' },
        bug: { bg: 'bg-green-500', text: 'text-green-500' },
        rock: { bg: 'bg-gray-500', text: 'text-gray-500' },
        ghost: { bg: 'bg-purple-500', text: 'text-purple-500' },
        dragon: { bg: 'bg-red-500', text: 'text-red-500' },
        dark: { bg: 'bg-gray-500', text: 'text-gray-500' },
        steel: { bg: 'bg-gray-500', text: 'text-gray-500' },
        fairy: { bg: 'bg-pink-500', text: 'text-pink-500' },
    };

    return theme[type] || { bg: 'bg-blue-500', text: 'text-blue-500' };
};