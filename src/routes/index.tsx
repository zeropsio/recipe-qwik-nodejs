import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Content from "../components/starter/content/content";

export default component$(() => {
  return (
    <>
      <Content />
      {/* <Starter /> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik with Zerops",
  meta: [
    {
      name: "description",
      content: "Qwik SSR (Node.js) example running on Zerops.",
    },
  ],
};
