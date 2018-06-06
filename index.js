var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value
  return recipes
}
updateObjectWithKeyAndValue(obj, 'prop2', 2)

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes = { prop: 1 }
  recipes.key = value
  return recipes
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2)

function deleteFromObjectByKey(object, key) {
  recipes
}
deleteFromObjectByKey(obj, 'prop')

function destructivelyDeleteFromObjectByKey(object, key) {
  recipes
}
destructivelyDeleteFromObjectByKey(obj, 'prop')
