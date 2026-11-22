import { ref, computed, readonly } from 'vue'
import { initialArticles } from '../data/articles.js'

const articles = ref(initialArticles.map(item => ({ ...item })))
let nextId = Math.max(0, ...articles.value.map(item => item.id)) + 1

const completedCount = computed(() =>
    articles.value.filter(item => item.completed).length
)

const totalMinutes = computed(() =>
    articles.value.reduce((total, item) => total + item.minutes, 0)
)

const progressPercent = computed(() => {
    if (articles.value.length === 0) return 0
    return Math.round(completedCount.value / articles.value.length * 100)
})

function saveArticle(name, description, image, type) {
    articles.value.push({ id: nextId++, name, description, image, type, deleted: false })
    return ''
}

function removeArticle(id) {
    articles.value = articles.value.filter(
        item => item.id !== id)
}

function toggleArticle(id) {
    const article = articles.value.find(item => item.id === id)
    if (article) article.completed = !article.completed
}

function clearCompleted() {
    articles.value = articles.value.filter(item => !item.completed)
}

// This single object is shared by every caller in this browser app.
const workout = {
    articles: readonly(articles),
    completedCount,
    totalMinutes,
    progressPercent,
    saveArticle,
    removeArticle,
    toggleArticle,
    clearCompleted
}

export function useWorkout() {
    return workout
}
