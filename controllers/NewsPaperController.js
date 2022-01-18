const NewsPaper = require('../models/newspaper');

exports.registerCompany = async (req, res, next) => {
    try {
        const task = req.body;

        const response = new NewsPaper({
            ...task
        });

        await response.save()


        return res.status(201).send({
            success: true,
            message: "Company succesfully registered",
            data: response
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            error: error
        });
    }
}