let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const homePage = {
    initialize,
    getView
};

export default homePage;