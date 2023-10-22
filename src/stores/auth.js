import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
defineStore('authentication', {
    state: () => ({
        displayName: '',
        email: '',
        id: ''
    })
})