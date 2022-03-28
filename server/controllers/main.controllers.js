// const cashierService = require("../services/cashier.service");

const service = require("../services/main.service")

exports.getTask = async ( req , res) => {
    try {
        let result = await service.getTask();
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}

exports.addTask = async ( req , res) => {
    try {
        let result = await service.addTask(req.body);
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}

exports.removeTask = async ( req , res) => {
    try {
        let result = await service.removeTask(req.body);
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}


exports.getTimeLog = async ( req , res) => {
    try {
        let result = await service.getTimeLog();
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}

exports.startTimer = async ( req , res) => {
    try {
        let result = await service.startTimer(req.body);
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}

exports.stopTimer = async ( req , res) => {
    try {
        let result = await service.stopTimer(req.body);
        res.send(result)
    } catch (error) {
        return res.sendStatus('404')
    }
}
