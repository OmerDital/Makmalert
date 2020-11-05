export default io => {
    const update = (req, res, next) => {
        const alertText = req.body.alertText;
        const user = req.body.user;

        try {
            res.send();
            io.to(user.name).emit('alert', alertText);
        } catch (error) {
            next();
        }
    };

    return ({
        update
    });
};