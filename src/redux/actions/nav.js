export const TOGGLE_NAV = 'TOGGLE_NAV';

export const toggleNav = current => {
    return {
        type: TOGGLE_NAV,
        current
    }
};