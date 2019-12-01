import React, {Component} from 'react'
import axios from 'axios'

export default class Stories extends Component {
  constructor () {
    super()
    this.state = {
      stories: []
    }
  }

  async componentDidMount () {
    try {
      const storiesResponse = await axios.get('/api/stories')
      this.setState({ stories: storiesResponse.data })
    }
    catch (error) {
      console.error(error)
    }
  }

  render () {
    const stories = this.state.stories

    return (
      <div id='stories' className='column'>
        {
          stories.map(story => (
            <div className='story' key={story.id}>
              <a>
                <h3>{story.title}</h3>
              </a>
              <a>
                <p>{story.author.name}</p>
              </a>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}
