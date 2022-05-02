let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const loginPage = {
    initialize,
    getView
};

export default loginPage;