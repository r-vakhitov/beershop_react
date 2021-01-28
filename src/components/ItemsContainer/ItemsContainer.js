import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Item from "../Item";
import "./ItemsContainer.css";

export default class ItemsContainer extends Component {
  state = {
    numToShow: 15
  }

  render() {

    const { items, byIds } = this.props;
    const button = this.props.renderButton();
    
    const onScroll = (e) => {
      if (e.target.offsetHeight + e.target.scrollTop === e.target.scrollHeight) {
        this.setState(({ numToShow }) => ({
          numToShow: Math.min(numToShow + 10, items.length),
        }))
      }
    }

    return (
      <Droppable droppableId={this.props.id}>
        {(provided, snapshot) => {
          return (
            <div className="items-container">
              {button}
              <ul
                className="items-container__list"
                onScroll={onScroll}
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
                    draggableId={item.toString()}
                    key={item}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <li
                          className="items-container__item"
                          ref={provided.innerRef}
                          content={byIds[item].name}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            backgroundColor: snapshot.isDragging
                              ? "#72d7ff"
                              : "#d6efff",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <Item content={byIds[item].name} />
                        </li>
                      );
                    }}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          );
        }}
      </Droppable>
    );
  }
}
