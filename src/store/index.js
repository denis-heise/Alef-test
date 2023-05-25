import { createStore } from 'vuex';

export default createStore({
    state () {
        return {
            formData: []
        }
    },
    getters: {
        getFormData (state){
            return state.formData;
        }
    },
    mutations: {
        FORM_DATA (state, payload) {
            state.formData = payload;
        }
    },
    actions: {
        setFormData (context, quantity){
            context.commit('FORM_DATA', quantity)
        }
    }
  })
