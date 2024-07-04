import { component$, $, useSignal } from "@builder.io/qwik";
import styles from "./steps.module.css";

const CopyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

interface CodeBlockProps {
  code: string;
  file: string;
  fileLink: string;
}

export const CodeBlock = component$<CodeBlockProps>(
  ({ code, file, fileLink }) => {
    const copied = useSignal(false); // Use useSignal to define reactive state

    const copy = $(async () => {
      await navigator?.clipboard?.writeText(code);
      copied.value = true; // Update copied.value to true
      setTimeout(() => {
        copied.value = false; // Reset copied.value to false after 2000 ms
      }, 2000);
    });

    return (
      <span class="my-8 bg-[#0C4D98] h-full rounded-md ">
        <a
          href={fileLink}
          target="_blank"
          class={[
            "link flex justify-center py-1 text-sm font-medium",
            styles.link,
          ]}
        >
          {file}
        </a>
        <div class="bg-[#123D6F] rounded-b-md h-full w-full  relative">
          <button
            onClick$={copy}
            class={{
              "absolute top-4 right-4 p-2 rounded-md bg-[#065CC0] hover:bg-[#0364D5] copybtn duration-300 text-white":
                true,
              "": copied.value,
            }}
          >
            {copied.value ? CheckIcon : CopyIcon}
          </button>
          <pre class="overflow-x-auto h-full p-8">
            <code class="text-[#d2d7fc] bg-transparent text-sm font-medium  overflow-x-auto">
              {code}
            </code>
          </pre>
        </div>
      </span>
    );
  },
);
