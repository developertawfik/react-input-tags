import { useState } from 'react'

function TagsInput() {
    const [tags, setTags] = useState([]);
    function handleKeyDown(e) {
        if (e.key !== "Enter") return;

        const value = e.target.value;
        if (!value.trim()) return;
        setTags([...tags, value]);
        e.target.value = "";
    }
    function RemoveTag(index) {
        setTags(tags.filter((i) => i !== index));
    }
    return (
        <div className="tags-input-container">
            {/* <div className="tag-item">
                <span className="text">Hello</span>
                <span className="close">&times;</span>
            </div> */}
            {tags.map((tag , index) => (
                <div className="tag-item" key={index}>
                    <span className="text">{ tag }</span>
                    <span className="close" onClick={() => RemoveTag(index)}>&times;</span>
                </div>
            ))}
            <input onKeyDown={handleKeyDown} className="tags-input" type="text" placeholder="Type Somthing..." />
        </div>
    )
}

export default TagsInput;