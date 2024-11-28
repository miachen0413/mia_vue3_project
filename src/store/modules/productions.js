export default {
  state: () => ({
    production: [{
        id: 1,
        name: "A",
        describe: "AAAA",
        price: 200
      },
      {
        id: 2,
        name: "B",
        describe: "BBBB",
        price: 100
      },
      {
        id: 3,
        name: "C",
        describe: "CCCC",
        price: 300
      },
    ]
  }),
  mutations: {
    add(state, payload) {
      state.production.push(payload);
    },
    delete(state, id) {
      state.production = state.production.filter((value) => value.id !== id)
    }
  },
  actions: {},
  getters: {}
}
