import React from 'react';

// function Component
// function TOC({ onChangePage, data }) {
//   console.log(data);
//   return (
//     <ul className="toc">
//       {data.map((topic) => {
//         return (
//           <li key={topic.id} onClick={onChangePage}>
//             <a>{topic.title}</a>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

class TOC extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // console.log(
    //   '=====> TOC shouldComponentUpdate',
    //   this.props.data,
    //   nextProps.data
    // );
    if (this.props.data === nextProps.data) {
      return false;
    }
    return true;
  }

  render() {
    // console.log('TOC render');
    let lists = [];
    const { data, onChangePage } = this.props;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            href={`/content/${data[i].id}`}
            data-id={data[i].id}
            onClick={function (e) {
              e.preventDefault();
              onChangePage(e.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
      i++;
    }

    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
