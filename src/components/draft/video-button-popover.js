import React from 'react'

export class VideoButtonPopover extends React.Component {
  constructor(props) {
    super(props)
    this.state = {url: ''}
    this.closePopover = this.closePopover.bind(this)
    this.changeUrl = this.changeUrl.bind(this)
    this.onPopoverClick = this.onPopoverClick.bind(this)
    this.addVideo = this.addVideo.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.open && !prevProps.open)
      document.addEventListener('click', this.closePopover)

    if (!this.props.open && prevProps.open)
      document.removeEventListener('click', this.closePopover)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closePopover)
  }

  onPopoverClick() {
    this.preventNextClose = true
  }

  closePopover() {
    if (!this.preventNextClose && this.props.open)
      this.props.toggleVideoPopover(false)

    this.preventNextClose = false
  }

  changeUrl(evt) {
    this.setState({url: evt.target.value})
  }

  addVideo() {
    const {url} = this.state
    this.props.addVideo(url)
    this.setState({url: ''})
  }

  render() {
    const popoverClassName = this.props.open ? '' : 'is-hidden'

    return (
      <div className={popoverClassName} onClick={this.onPopoverClick}>
        <input
          type="text"
          placeholder="Paste the video url…"
          className="addVideoInput"
          onChange={this.changeUrl}
          value={this.state.url}
        />
        <button
          className="addVideoConfirmButton"
          type="button"
          onClick={this.addVideo}
        >
          Add
        </button>
      </div>
    )
  }
}
