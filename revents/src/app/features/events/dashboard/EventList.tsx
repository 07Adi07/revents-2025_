import { AppEvent } from "../../../types/event";
import EventListItem from "./EventListItem";

type Props = {
  events: AppEvent[];
};

export default function EventList({ events }: Props) {
  return (
    <div>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </div>
  );
}
