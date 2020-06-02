import {Component} from '../core/component'

export class NavigationComponent extends Component {
    constructor(id) {
        super(id)
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
    event.preventDefault()
    
    if (event.target.classList.contains('tab')) {
        this.$el.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
    }
}