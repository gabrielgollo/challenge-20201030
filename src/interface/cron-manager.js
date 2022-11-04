const cron = require('node-cron')

class CronManager {
    constructor (tasks) {
        this.tasks = tasks
        this.lastExecution = null
        this.cron = null
    }

    start () {
        this.tasks.forEach(task => {
            cron.schedule(task.cron, () => {
                this.lastExecution = new Date()
                if (typeof task?.task === 'function') task?.task()
            })
        })
    }
}

module.exports = CronManager
