import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  // automatically will check if loader returns a promise and await for the promise to resolve
  const { events } = useLoaderData();
  // const events = data.events;
  // const res = new Response('sm data', {status: 201});
  // data, config

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading ...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
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
export function loader() {
  return defer({
    events: loadEvents(),
  });
}

// export function loader() {}
