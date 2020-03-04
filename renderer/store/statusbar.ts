export interface IState {
  message: string
}

export const state = {
  message: 'no'
}

export const mutations = {
    SETMESSAGE(state: IState, msg: string) {
        state.message = msg;
    }
}

export const actions = {
  SetMessage({commit}: any, msg: string) {
    commit('SETMESSAGE', msg)
  }
}

export const getters = {
    GetMessage: (state: IState) => state.message
}
