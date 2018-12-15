import React from 'react'
import {connect} from 'react-redux'
import postActions from '../../state-management/actions/post-actions'

const mapStateToProps = (state:any) => {
  let mappedProps = {
    posts : state.postReducer.posts
  }
  return mappedProps
}

const mapDispatchToProps = (dispatch:any) => {
  let mappedProps = {
    displayPostDetails : (postId: Number) => dispatch(postActions.showPostDetails(postId))
  }
  return mappedProps
}

export interface Props {
  posts: any,
  displayPostDetails : any,
}

class connectedposts extends React.Component<Props>{
  showDummyDetails(id: any){
    this.props.displayPostDetails(id)
  }

  render(){

    const posts = (
      this.props.posts.map( (post:any) => {
        return (
          <li key={post.id}>
            <a className="button dummyPostBtn" onClick={ () => this.showDummyDetails(post.id)}> {post.title} </a>
          </li>
        )
      })
    )

    return(
      <div className='block'>
        <p className='menu-label'>
          Posts 
        </p>
        <ul className='menu-list'>
          {posts}
        </ul>

      </div>
    )
  }
}

const PostsList = connect(mapStateToProps, mapDispatchToProps)(connectedposts)
export default PostsList