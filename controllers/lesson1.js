const sarahRoute = (req, res) => {
    res.send('sarah, Grace, and I are working on this project together');
};

const hannahRoute = (req, res) => {
    res.send('Hello, Hannah!');
};

const Emmanuel = (req, res) => {
    res.send('Hello, Emmanuel!');
};


module.exports = {
    sarahRoute,
    hannahRoute,
    Emmanuel
};