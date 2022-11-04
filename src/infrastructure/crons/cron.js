const CronManager = require('../../interface/cron-manager')
const UpdateOpenFoodFactsCron = require('./update-open-food-fact-cron')
const tasks = [
    {
        cron: '*/2 * * * * *',
        task: UpdateOpenFoodFactsCron.startProcessing
    }
]

const cronManager = new CronManager(tasks)

module.exports = cronManager
