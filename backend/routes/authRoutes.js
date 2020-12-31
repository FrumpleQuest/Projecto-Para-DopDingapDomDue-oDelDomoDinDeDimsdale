const router = require("express").Router();

const { User } = require("../models");

const { Developer } = require("../models");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

//aqui se registra un usuario nuevo

router.post("/register", async (req,res) => {
    try {
        const emailValid = await User.findOne({where:{
            email:req.body.email,
        },
    });

    if(req.body.type != "Developer" && req.body.type != "Client" && req.body.type != "Manager") return res.status(400).send("El tipo de cuenta que ingreso no es permitida");

    if(emailValid) return res.status(400).send("This email is already in use");
    //Esto va a encriptar y hashear la contrasena
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.pass, salt);
    //Aqui se va a crear el usuario
    const user = await User.create({
        name:req.body.name,
        email:req.body.email,
        pass: hashPass,
        type:req.body.type,
    });

    if(req.body.type == "Developer") await Developer.create({
        email:req.body.email,
        prevProjects: null,
        tools: null,
        comments: null,
        isFreelancer: null,
        ratings: null,
        pmComments: null,
    });

     return res.send(user);

    } catch (error) {
        return res.status(400).send(error);
    }
});


//Aqui se hace el login de un usuario ya existente

router.post("/login", async (req, res) => {
    try{
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });
    if(!user) return res.status(400).send("The email or password entered is incorrect");
    const validPass = await bcrypt.compare(req.body.pass, user.pass);

    if(!validPass) return res.status(400).send("The email or password entered was incorrect");
    const token = jwt.sign({id:user.id}, process.env.SECRET_TOKEN);

    return res.header("auth-token",token).send("You have succesfully logged in");
} catch (error) {
    return res.status(400).send(error);
}
});

module.exports = router;