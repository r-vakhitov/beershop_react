import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Item from "../Item";
import "./ItemsContainer.css";

export default class ItemsContainer extends Component {
  constructor(props) {
    super(props)
    this.myref = React.createRef();
    this.state = {
      numToShow: 14
    }
    this.intersectionObserver = new IntersectionObserver(entries => {
      var ratio = entries[0].intersectionRatio;
      if (ratio > 0) {
        this.setState({ numToShow: this.state.numToShow + 5 });
      }
    })
  }

  componentDidMount() {
    this.intersectionObserver.observe(this.myref.current)
  }

  

  render() {

    const { items, byIds } = this.props;
    const button = this.props.renderButton();
    

    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => {
          return (
            <div className="items-container">
              {button}
              <ul
                className="items-container__list"
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgrey",
                }}
              >
                {items.slice(0, this.state.numToShow).map((item, index) => (
                  <Draggable
                    draggableId={item}
                    key={item}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <li
                          className="items-container__item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            backgroundColor: snapshot.isDragging
                              ? "#72d7ff"
                              : "#d6efff",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <Item content={byIds[item].name} id={item} />
                        </li>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
                <div ref = {this.myref}></div>
              </ul>
              
            </div>
          );
        }}
      </Droppable>
    );
  }
}
