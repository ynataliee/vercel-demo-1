import { useEffect, useState } from 'react'
import './../styles/interestTags.css'

function InterestTags() {
  const[tags, setTags] = useState([])

  useEffect ( () => {
    fetchInterestTags()
  }, [])

  const fetchInterestTags = async () => {
    // need to replace url with servers url, this is currrently local
    const response = await fetch("https://null.isageek.net/interestTags")
    const data = await response.json()
    for(const t of data.interestTags){
      console.log("type: ", typeof t, "\n")
    }
    setTags(data.interestTags)
    console.log("Logging the data: \n\n", data.interestTags)
    tags.map(tag => (console.log("tag: ", tag, "\n")))
  }

  const handleTagClick = (tag) => {
    // Handle tag selection logic here
    console.log("Selected tag:", tag)
  }
  
  /* passing the projects we got from the /projects endpoint to the ProjectList component
   * so the it can use the data to display the projects on the page.
  */
  return (
    <div>
    <div className="title-container">
      <h1 className="title">Select Your Interests</h1>
    </div>
    <div className="tag-buttons">
      {tags.map(tag => (
        <button key={tag} onClick={() => handleTagClick(tag)}>{tag}</button>
      ))}
    </div>
  </div>
  )
}
export default InterestTags