const playerFactory = (name) => {
    let turn = false;
    return { name, turn };
};

export default playerFactory;
