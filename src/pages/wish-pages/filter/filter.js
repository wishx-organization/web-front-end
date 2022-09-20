import React from "react";
import { HiOutlineFilter, HiBadgeCheck} from 'react-icons/hi';
import '../Wish-pages.styled'

const filterstyle = {
    fontSize: '24px',
    color: '#3800B0',
    float: 'right',
}

class FilterColumns extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      filterItems: this.props.filterItems,
      selectedItems: this.props.filterItems
        .filter(item => item.selected === true)
        .map(item => item.name)
    };
  }

  showFilter = () => {
    this.setState({ showFilter: !this.state.showFilter });
  };

  changeHandler = index => {
    console.log("inside columnfilter method");
    const filterItems = [];

    filterItems.push(...this.state.filterItems);
    filterItems[index].selected = !filterItems[index].selected;
    console.log(filterItems);
    const selectedItems = filterItems
      .filter(item => item.selected === true)
      .map(item => item.name);
    console.log(selectedItems);
    this.setState({
      selectedItems: selectedItems
    });
  };

  render() {
    return (
      <div style={filterstyle} className="columnFilter">
          <HiOutlineFilter  onClick={this.showFilter}/>
        {this.state.showFilter && (
          <form className="filterContent">
            {this.state.filterItems.map((item, index) => (
              <label>
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => this.changeHandler(index)}
                />
                {item.name}
              </label>
            ))}
          </form>
          // <form className="filterContent" onChange={this.changeHandler}>
          //   <label>
          //     <input type="checkbox" onChange={this.changeHandler(index)} />
          //     Input 1
          //   </label>
          //   <label>
          //     <input type="checkbox" />
          //     Input 1
          //   </label>
          // </form>
        )}
      </div>
    );
  }
}

export default FilterColumns;
