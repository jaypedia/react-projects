import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'welcome',
      selected_content_id: 0,
      subject: { title: 'WEB', sub: 'World Wide Web' },
      welcome: { title: 'Welcome', desc: 'Welcome to React' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is ...' },
        { id: 2, title: 'CSS', desc: 'CSS is ...' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is ...' },
      ],
    };
  }

  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i++;
    }
  }

  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === 'create') {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            ++this.max_content_id;
            let newContents = Array.from(this.state.contents);
            newContents.push({
              id: this.max_content_id,
              title: _title,
              desc: _desc,
            });
            this.setState({
              contents: newContents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></CreateContent>
      );
    } else if (this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let updatedContents = Array.from(this.state.contents);
            let i = 0;
            while (i < updatedContents.length) {
              if (updatedContents[i].id === _id) {
                updatedContents[i] = { id: _id, title: _title, desc: _desc };
                break;
              }
              i++;
            }
            this.setState({
              contents: updatedContents,
              mode: 'read',
              selected_content_id: this.max_content_id,
            });
          }.bind(this)}
        ></UpdateContent>
      );
    }
    return _article;
  }

  render() {
    const { subject, contents } = this.state;
    return (
      <div className="app">
        <Subject
          title={subject.title}
          sub={subject.sub}
          onChangePage={function (e) {
            e.preventDefault();
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({ mode: 'read', selected_content_id: Number(id) });
          }.bind(this)}
          data={contents}
        ></TOC>
        <Control
          onChangeMode={function (_mode) {
            if (_mode === 'delete') {
              if (window.confirm('Do you want to delete this?')) {
                let i = 0;
                let deletedContents = Array.from(this.state.contents);
                while (i < deletedContents.length) {
                  if (
                    deletedContents[i].id === this.state.selected_content_id
                  ) {
                    deletedContents.splice(i, 1);
                    break;
                  }
                  i++;
                }
                this.setState({ contents: deletedContents, mode: 'welcome' });
              }
            } else {
              this.setState({ mode: _mode });
            }
          }.bind(this)}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
