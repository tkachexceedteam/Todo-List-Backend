const Events = require("../../db/models/events");

module.exports.getAllEvents = async (req, res, next) => {
    try {
        const result = await Events.find()
        res.json(result)
    }
    catch(err) {
        res.status(422).json(err.message);
    }

};

module.exports.createNewEvent = async (req, res, next) => {
    const {name, doctor, date, issues} = req.body;
    // const {name} = req.body;
    // const {doctor} = req.body;
    // const {date} = req.body;
    // const {issues} = req.body;
    try {
        const event = new Events({
            name: name,
            doctor: doctor,
            date: date,
            issues: issues
        });
        // const event = new Events(req.body);
        const result = await event.save()
        res.json(result)
    } catch (err) {
        res.status(422).json(err.message);
    }
};

module.exports.changeEvent = async (req, res, next) => {
    const body = req.body;
    try {
        Events.findOneAndUpdate({_id: body._id}, {text: body.text, isCheck: body.isCheck}).then();
        res.json()
    }
    catch (err) {
        res.status(422).send('Error! Params not correct');
    }
};

module.exports.deleteEvent = async (req, res, next) => {
    try {
        Events.findOneAndRemove({_id: req.query._id}).then(result => {
            res.status(200).send('')
        });
    }
    catch (err) {
        err.status(422).send('Error! Params not correct');
    }
};