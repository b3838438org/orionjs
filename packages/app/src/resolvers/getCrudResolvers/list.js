import createPaginatedResolver from '../createPaginatedResolver'

export default ({name, collection, Model, paginatedOptions}) => {
  return createPaginatedResolver({
    returns: Model,
    collection,
    ...paginatedOptions
  })
}
