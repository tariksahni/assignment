import _ from 'lodash'

export const changeStatus = data => {
  const copyData = JSON.parse(JSON.stringify(data))
  const objectToChangeStatus = _.find(copyData.tasks[copyData.status], {
    id: copyData.id
  })
  objectToChangeStatus.status = copyData.newStatus
  return objectToChangeStatus
}

export const removeObject = data => {
  const copyData = JSON.parse(JSON.stringify(data))
  _.remove(copyData.tasks[copyData.status], {
    id: copyData.id
  })
  return copyData.tasks[copyData.status]
}
