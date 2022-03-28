let taskList = []
let currentDate = new Date();

const BASE_URL = 'http://localhost:3300/'
const GET_TASK = 'api/getTasks'

const GET = 'get'

const weeks = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

window.onload = async () => {
  taskList = await getTask()
  await showDay()
  console.log(taskList)
}

showDay = async () => {
  let dayElement = document.getElementById('day-wrapper')

  let potato = ''

  weeks.forEach((element) => {
    potato += `<div class="day">
        ${element}
    </div>`
  })

  dayElement.innerHTML = `${potato}`
  // dayElement.appendChild('potato')
}

getTask = async () => {
  return (data = await api(GET_TASK, GET, null))
}

api = async (path, method, body) => {
  let response = await fetch(BASE_URL + path, {
    method: method,
    body: body,
  })
  return await response.json()
}
