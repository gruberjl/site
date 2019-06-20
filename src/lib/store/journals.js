import {Collection}  from './collection'
import shortid from 'shortid'
import {convertToRaw, EditorState} from 'draft-js'

class Journals extends Collection {
  constructor(collectionName) {
    super(collectionName)
    this.events.activePage = 'activePage'
  }

  activePage = ''

  create = () => {
    const doc = {
      id: shortid.generate(),
      content: convertToRaw(EditorState.createEmpty().getCurrentContent()),
      name: 'page'
    }

    return doc
  }

  setActivePage = (pageId) => {
    this.activePage = pageId
    this.emit(this.events.activePage, pageId)
  }
}

export const journals = new Journals('journals')
