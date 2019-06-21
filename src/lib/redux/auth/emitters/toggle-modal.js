import {store} from '../../store'

export const toggleModal = (modalName, shouldOpenModal) => {
  store.dispatch({
    type: 'toggleAuthModal',
    modalName,
    shouldOpenModal
  })
}
