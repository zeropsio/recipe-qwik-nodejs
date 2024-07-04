import { CodeBlock } from "./code";
import styles from "./steps.module.css";

export function Steps() {
  const importyaml = `project:
  name: recipe-qwik
  tags:
    - zerops-recipe

services:
  - hostname: app
    type: nodejs@20
    enableSubdomainAccess: true
    buildFromGit: https://github.com/zeropsio/recipe-qwik-nodejs`.trim();

  const zeropsyaml = `zerops:
  - setup: app
    build:
      base: nodejs@20
      buildCommands:
        - pnpm i
        - pnpm run build
      deployFiles:
        - dist
        - package.json
        - node_modules
        - public
        - server
    run:
      base: nodejs@20
      ports:
        - port: 3000
          httpSupport: true
      start: pnpm start`.trim();
  return (
    <div>
      <div class="grid grid-cols md:grid-cols-2 font-light gap-5 md:gap-10 pt-4">
        <div class="flex flex-col gap-5">
          <CodeBlock
            fileLink="https://github.com/zeropsio/recipe-qwik-nodejs/blob/main/zerops-project-import.yml"
            file="zerops-project-import.yml"
            code={importyaml}
          />
          <div class="flex flex-col py-12 max-h-[300px] rounded-md gap-5 px-10 bg-[#123D6F]">
            <a
              href="https://github.com/zeropsio/recipe-qwik-nodejs"
              target="_blank"
              class={[
                "rounded-full text-center text-md duration-300 hover:no-underline",
                styles.primarybutton,
              ]}
            >
              Recipe Source Code
            </a>
            <a
              href="https://discord.com/invite/WDvCZ54"
              target="_blank"
              class={[
                "rounded-full text-center text-md duration-300 hover:no-underline",
                styles.discordbutton,
              ]}
            >
              Discord
            </a>
            <a
              href="https://docs.zerops.io"
              target="_blank"
              class={[
                "rounded-full text-center text-md duration-300 hover:no-underline",
                styles.zeropsbutton,
              ]}
            >
              Documentation
            </a>
          </div>
        </div>
        <div class="flex flex-col">
          <CodeBlock
            fileLink="https://github.com/zeropsio/recipe-qwik-nodejs/blob/main/zerops.yml"
            file="zerops.yml"
            code={zeropsyaml}
          />
        </div>
      </div>
    </div>
  );
}
