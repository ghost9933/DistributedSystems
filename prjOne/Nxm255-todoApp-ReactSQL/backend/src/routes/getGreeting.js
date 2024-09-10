const GREETING = 'wellcome to Nikhil [NXM2555] ToDO app ';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
