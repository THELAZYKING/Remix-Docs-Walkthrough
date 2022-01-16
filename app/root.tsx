import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  return (
   <html lang="en">
     <head>
       <meta charSet="utf-8" />
       <title> Remix Document Tutorial</title>
     </head>
     <body>
       Hello World
         {process.env.NODE_ENV === "development" ? (<LiveReload />) :null}
     </body>
   </html>
  );
}
