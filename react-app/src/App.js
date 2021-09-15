import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    let _title,
      _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
        }
        i++;
      }
    }

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
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
