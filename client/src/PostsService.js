
import Api from '~/client/src/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  }
}