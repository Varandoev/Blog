import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostsComponent} from './components/posts.component'
import {CreateComponent} from './components/create.component'
import {FavoriteComponent} from './components/favorite.component'

new HeaderComponent('header')

const posts = new PostsComponent('posts')
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')
const navigation = new NavigationComponent('navigation', {posts, create, favorite})