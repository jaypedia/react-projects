import React from 'react';

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
  render() {
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
            }.bind(this)}
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
