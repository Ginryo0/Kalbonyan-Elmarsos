import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();
  // if a response was thrown -> error object will include a status and Json data

  let title = "An error occurred!";
  let message = "Something Went Wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  // status 404 -> in response thrown in non existing route
  if (error.status === 404) {
    message = "Not Found";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
