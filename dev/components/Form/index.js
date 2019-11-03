import React, {useState} from 'react'

const Form = ({addNewProp}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleChange = (e)=> {
    const {name, value} = e.target
    if(name === 'title'){
      setTitle(value)
    } else {
      setText(value)
    }
  }

  const submitNew = (e)=> {
    e.preventDefault()
    const data = {
      id: Date.now(),
      title,
      text
    };
    addNewProp(data)
    clearForm()
  }
  const clearForm = () => {
    setTitle('')
    setText('')
  }
    return(
      <form className="form" onSubmit={submitNew}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="title"
          value={title}
          onChange={handleChange}/>
        <label htmlFor="text">Comment</label>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={handleChange}> </textarea>
        <button className="button">Add new article</button>
      </form>
    )
}

export default Form
