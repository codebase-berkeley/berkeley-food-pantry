const { re } = require("prettier");
const { Appointment } = require("./models/Appointment");

module.exports = (app) => {

    app.get('/appointment', async (req, res) => {
        const appointment = await Appointment.findAll();
        res.status(200).json(appointment);
    });

    app.post('/appointment', async (req, res) => {
        // console.log("HELLO ABIGAIL");
        const last_name = req.body.last_name;
        const first_name = req.body.first_name;
        const date = req.body.date;
        const time = req.body.time;
        const email = req.body.email;
        const phone_number = req.body.phone_number;
        const visited = req.body.visited;
        const dietary_preferences = req.body.dietary_preferences;
        const item_preferences = req.body.item_preferences;
        const notes = req.body.notes;
        
        if (!last_name || last_name.length <= 0 ) return res.status(401).end();
        if (!first_name || first_name.length <= 0) return res.status(402).end();
        if (!date || date.length <= 0) return res.status(403).end();
        if (!time || time.length <= 0) return res.status(404).end();
        if (!email || email.length <= 0) return res.status(404).end();
        if (!phone_number || phone_number.length < 10) return res.status(406).end();
        if (visited == null) return res.status(407).end();

        await Appointment.create({last_name: last_name, first_name: first_name, date: date, time: time, email: email, phone_number: phone_number, visited: visited, 
            dietary_preferences: dietary_preferences, item_preferences:item_preferences, notes: notes});
        res.status(200).end();
    });

    app.put('/appointment', async (req, res) => {
        const apptID = req.body.id;
        const visitedValue = req.body.visited;
        
        if (visitedValue == null) return res.status(400).end();

        if (await Appointment.update(
            {
                visited: !visitedValue,
            },
            {
                where: {id: apptID}
            }
        ) <= 0) return res.status(400).end();

        res.status(200).end();
    });
    
}
