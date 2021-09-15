import React from 'react';

function Content({ title, desc }) {
  return (
    <div className="content">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}

// class Content extends React.Component {
//   render() {
//     return (
//       <div className="content">
//         <h2>{this.props.title}</h2>
//         <p>{this.props.desc}</p>
//       </div>
//     );
//   }
// }

export default Content;
