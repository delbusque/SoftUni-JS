export function checkOrphForm(orphData) {

    return Object.values(orphData).every(v => v);
};

export const orphsData = new Map();