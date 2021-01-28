import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Item from "../Item";
import "./ItemsContainer.css";

export default class ItemsContainer extends Component {
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
                {items.map((item, index) => (
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
