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

export const editObject = (editedData, data) => {
  _.remove(data, {
    id: editedData.id
  })
  data.push(editedData)
  return data
}

export const deleteObject = (id, data) => {
  _.remove(data, {
    id: id
  })
  return data
}
