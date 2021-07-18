let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const editMovie = {
    initialize,
    getView
};

export default editMovie;