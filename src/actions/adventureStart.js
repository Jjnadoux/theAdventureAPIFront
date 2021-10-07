export const FETCH_ADVENTURESTART = 'FETCH_ADVENTURESTART';
export const SAVE_ADVENTURESTART = 'SAVE_ADVENTURESTART';

export const fetchAdventureStart = () => ({
    type : FETCH_ADVENTURESTART,
});

export const saveAdventureStart = (adventureStart) => ({
    type: SAVE_ADVENTURESTART,
    newAdventureStart: adventureStart,
})