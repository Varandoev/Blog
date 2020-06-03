import {Component} from '../core/component'

export class NavigationComponent extends Component {
    constructor(id, panels) {
        super(id)
        this.panels = panels
    }

    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this))
    }
}

function tabClickHandler(event) {
    event.preventDefault()    
    
    if (event.target.classList.contains('tab')) {
        for (let panelName in this.panels) {
            this.panels[panelName].hide()
        }
        
        this.$el.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')

        const activeTab = event.target.dataset.name
        this.panels[activeTab].show()
    }
}