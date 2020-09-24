function createRemarkable() {
  var remarkable =
    'undefined' != typeof global && global.Remarkable
      ? global.Remarkable
      : window.Remarkable;

  return new remarkable();
}

class Comment extends React.Component {
  render() {
    const md = createRemarkable();
    return (
      <div className="comment">
        <h2 className="commentAuthor">{this.props.author}</h2>
        {md.render(this.props.children.toString())}
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    return (
      <div className="commentList">
        <Comment author="Daniel adad">Hello ReactJS.NET World!</Comment>
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      </div>
    );
  }
}

class CommentForm extends React.Component {
  render() {
    return <div className="commentForm">Hello, world! I am a CommentForm.</div>;
  }
}

class CommentBox extends React.Component {
  render() {
    return (
      <div className="commentBox">
        {' '}
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

ReactDOM.render(<CommentBox />, document.getElementById('content'));
