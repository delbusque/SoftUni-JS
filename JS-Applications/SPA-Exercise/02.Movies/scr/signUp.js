let view = undefined;

function initialize(domElement) {
    view = domElement;
};

function getView() {
    return view;
}

const signUpPage = {
    initialize,
    getView
};

export default signUpPage;