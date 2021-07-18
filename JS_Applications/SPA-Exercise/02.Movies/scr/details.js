let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const detailsPage = {
    initialize,
    getView
};

export default detailsPage;