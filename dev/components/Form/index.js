import React, {Component} from 'react'

export default class Form extends Component {

  constructor() {
    super()

    this.state = {
      title:'',
      text:''
    }

    this.submitNew = this.submitNew.bind(this)
    this.clearForm = this.clearForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  submitNew(e) {
    e.preventDefault()
    const {title, text} = this.state
    const data = {
      id: Date.now(),
      title,
      text
    };
    this.props.addNewProp(data)
    this.clearForm()
  }


  clearForm() {
    this.setState({
      title:'',
      text:''
    })
  }
  render() {
    const {title,text} = this.state
    return(
      <form className="form" onSubmit={this.submitNew}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="title"
          value={title}
          onChange={this.handleChange}/>
        <label htmlFor="text">Comment</label>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={this.handleChange}></textarea>
        <button className="button">Add new article</button>
      </form>
    )
  }
}
