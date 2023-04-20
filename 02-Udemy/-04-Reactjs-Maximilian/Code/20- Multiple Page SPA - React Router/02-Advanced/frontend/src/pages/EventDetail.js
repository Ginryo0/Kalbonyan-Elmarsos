import { Suspense } from 'react';
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

export default function EventDetailPage() {
  // const params = useParams();
  const { event, events } = useRouteLoaderData('event-details');

  return (
    <>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading ...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading ...</p>}>
          <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
          </Await>
        </Suspense>
      </Suspense>
    </>
  );
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: "COULDNOT FETCH DATA" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });

    throw json({ message: 'Could not fetch events' }, { status: 500 });
    // the error will bubble up to the closest root with error element
  } else {
    // return response;
    const data = await response.json();
    return data.events;
  }
}
async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch selected event details.' },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.event;
  }
}
export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const id = params.eventId;

  const res = await fetch('http://localhost:8080/events/' + id, {
    method: request.method,
  });

  if (!res.ok) {
    throw json({ message: 'Could not delete selected event' }, { status: 500 });
  } else {
    return redirect('/events');
  }
}
