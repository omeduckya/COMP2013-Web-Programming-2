export default function PostForm({ newPost, handleChange, handleSubmit }) {
    return (
      <div className="Card">
        <h2>Post Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            name="body"
            value={newPost.body}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  