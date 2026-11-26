import { ref, computed, readonly } from 'vue'
import { initialArticles } from '../data/articles.js'

const articles = ref(initialArticles.map(item => ({ ...item })))
let nextId = Math.max(0, ...articles.value.map(item => item.id)) + 1

function saveArticle(id, name, description, image, type) {
    if(id === null){
    articles.value.push({ id: nextId++, name, description, image, type, deleted: false })
    } else {
        const article = articles.value.find(item => item.id === id)
        article.name = name
        article.description = description
        article.image = image
        article.type = type
    }
    return ''
}
function removeArticle(id) {
    articles.value = articles.value.filter(
        item => item.id !== id)
}
const artiList = {
    articles: readonly(articles),
    saveArticle,
    removeArticle,
}
export function useArtiList() {
    return artiList
}
