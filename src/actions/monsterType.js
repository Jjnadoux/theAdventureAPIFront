export const FETCH_MONSTERTYPE = 'FETCH_MONSTERTYPE';
export const SAVE_MONSTERTYPE = 'SAVE_MONSTERTYPE';

export const fetchMonsterType = () => ({
    type : FETCH_MONSTERTYPE,
});

export const saveMonsterType = (monsterType) => ({
    type: SAVE_MONSTERTYPE,
    newMonsterType: monsterType,
})