import app from './modules/app'
import { createStore } from 'vuex'

const store = createStore({
  // state?: S | (() => S);
  // getters?: GetterTree<S, S>;
  // actions?: ActionTree<S, S>;
  // mutations?: MutationTree<S>;
  // modules?: ModuleTree<S>;
  // plugins?: Plugin<S>[];
  // strict?: boolean;
  // devtools?: boolean;
  strict: true,

  modules: {
    app,
  },
})

export default store