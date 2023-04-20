import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDeleteAction,
} from './pages/EventDetail';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import EventsRootLayout from './pages/EventsRoot';
import { action as manipualteEventAction } from './components/EventForm';
import NewsletterPage, { action as newsLetterAction } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            loader: eventDetailLoader,
            id: 'event-details',
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDeleteAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipualteEventAction,
              },
            ],
          },
          {
            // this is more specific than dynamic /: -> will get priority over it
            path: 'new',
            element: <NewEventPage />,
            action: manipualteEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsLetterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
