let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const addMovie = {
    initialize,
    getView
};

export default addMovie;