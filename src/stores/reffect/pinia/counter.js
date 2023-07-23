import { defineStore } from "pinia";

export const useStoreCounter = defineStore('counter', {
    state: () => ({
        count: 0,
        count2: 1,
        user: {
            name: 'John Doe',
        }
    }),
    getters: {
        doubleCount: state => state.count * 2,
        // doubleCount2: () => this.count2 * 2,
    },
    actions: {
        increment() {
            this.count++
        }
    },
})
