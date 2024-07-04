import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "../../../routes/layout";
import styles from "./footer.module.css";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer>
      <div class="container">
        <span class={["text-[16px]", styles.anchor]}>
          <span class="text-[#d2d7fc]">
            Powered by{" "}
            <a
              href="https://www.zerops.io/"
              target="_blank"
              class="hover:underline font-bold"
            >
              Zerops
            </a>
          </span>
          <span class={["text-[#d2d7fc]", styles.spacer]}>|</span>
          <span class="text-[#d2d7fc]">{serverTime.value.date}</span>
        </span>
      </div>
    </footer>
  );
});
