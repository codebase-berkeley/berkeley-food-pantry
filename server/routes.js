const passport = require('passport')
const { Food } = require("./models/Food")

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(403).end();
    }
}

module.exports = (app) => {
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('http://localhost:3000/login');
    })
    app.get('/check_authenticated', checkAuthenticated, async (req, res) => {
        res.status(200).end(); 
    });

    app.get('/food', async (req, res) => {
        const food = await Food.findAll();
        res.status(200).json(food);
    });
    
    app.delete('/food', checkAuthenticated, async (req, res) => {
        const name = req.body.name;
        if (!name || name.length <= 0) return res.status(400).end();
        if (await Food.destroy({ where: { name }}) <= 0) return res.status(400).end();
        res.status(200).end();
        
    });

    app.post('/food', checkAuthenticated, async (req, res) => {
        const name = req.body.name;
        console.log(req.body.data);
        console.log(name);
        if (!name || name.length <= 0) return res.status(400).end();
        const image = req.body.image_path;
        const instock = req.body.instock;
        const tags = req.body.tags;
        await Food.create({
            
            name: name,
            instock: instock,
            tags: tags,
            image_path: image
        });
        res.status(200).end();
    
    });

    app.put('/food', checkAuthenticated, async (req, res) => {
        const name = req.body.name;
        if (!name || name.length <= 0) return res.status(400).end();
        const id = req.param.id; 
        const instock = req.body.instock;
        const tags = req.body.tags;
        const image = req.body.image_path;
        console.log(req.body.name);
        if (await Food.update({
            
            name: name, 
            instock: instock,
            tags: tags,
            image_path: image
        }, 
        {
            where: {
                id: id 
            }
        }) <= 0) return res.status(400).end();
        res.status(200).end();
        
    });

    // app.get('/auth', async (req, res) => {
    //     const { token }  = req.body
    //     const ticket = await client.verifyIdToken({
    //         idToken: token,
    //         audience: process.env.CLIENT_ID
    //     });
    //     const { name, email, picture } = ticket.getPayload();  
    //     console.log(email);
    //     if (email == 'mawil0721@berkeley.edu') {
    //         res.status(201).end();
    //     } else {
    //         res.status(403).end();
    //     }

    //     //authorised = db.get(email)
        
    //     // res.status(201)
    //     // res.json()// authorised)
    // });

    app.get('/auth/google',
        passport.authenticate('google', { scope: [ 'email', 'profile' ]
    }));

    app.get('/auth/google/callback', passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/edit-stock',
        failureRedirect: 'http://localhost:3000/login'
    }));
}