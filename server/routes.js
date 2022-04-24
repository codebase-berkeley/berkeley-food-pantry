const { Food } = require("./models/Food")

module.exports = (app) => {
    app.get('/food', async (reg, res) => {
        const food = await Food.findAll();
        res.status(200).json(food);
    });
    
    app.delete('/food', async (req, res) => {
        const name = req.body.name;
        if (!name || name.length <= 0) return res.status(400).end();
        if (await Food.destroy({ where: { name }}) <= 0) return res.status(400).end();
        res.status(200).end();
        
    });

    app.post('/food', async (req, res) => {
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

    app.put('/food', async (req, res) => {
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
}