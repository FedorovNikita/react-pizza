import React, { memo } from "react";
import PropTypes from "prop-types";

function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired, 
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null, 
  items: [],
}

// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   };

//   onSelectItem = (index) => {
//     this.setState({
//       activeItem: index,
//     });
//   };

//   render() {
//     const { items, onClickCategory } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           {/* <li className="active">Все</li>
//             <li>Мясные</li>
//             <li>Вегетарианская</li>
//             <li>Гриль</li>
//             <li>Острые</li>
//             <li>Закрытые</li> */}
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activeItem === index ? "active" : ""}
//               onClick={() => this.onSelectItem(index)}
//               key={`${name}_${index}`}
//             >
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

export default memo(Categories);
