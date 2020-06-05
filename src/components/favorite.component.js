import { Component } from '../core/component'
import { renderPost } from '../templates/post.template'
import { apiService } from '../services/api.service'

export class FavoriteComponent extends Component {
    constructor(id, {loader}) {
        super(id)
        this.loader = loader
    }

    init() {
        this.$el.addEventListener('click', linkClickHundler.bind(this))
    }

    onShow() {
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.$el.insertAdjacentHTML('afterbegin', html)
    }

    onHide() {
        this.$el.innerHTML = ''
    }
}

async function linkClickHundler(event) {
    event.preventDefault()
     
    if (event.target.classList.contains('js-link')) {
        const postId = event.target.textContent
        this.$el.innerHTML = ''
        this.loader.show()
        const post = await apiService.getPostById(postId)
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post, {whithButton: false}))
    }
}

function renderList(list = []) {
    if (list.length) {
        return `
            <ul>
                ${list.map(i => `<li><a href="#" class="js-link">${i}</a></li>`).join(' ')}
            </ul>
        `
    }
    return `<p>Вы пока ничего не добавили</p>`
}