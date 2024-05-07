import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { items } = props;

  const renderedContent = items.map((event) => {
    return (
      <EventItem
        key={event.id}
        title={event.title}
        image={event.image}
        date={event.date}
        location={event.location}
        id={event.id}
      />
    );
  });
  return <ul className={classes.list}>{renderedContent}</ul>;
};

export default EventList;
