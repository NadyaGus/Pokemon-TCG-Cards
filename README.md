# Pokémon TCG Cards Search

## About Project

This project was completed as part of assignment for [RS School React](https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md#week-1-1st-of-july-2024).

To create this application was used [Pokémon TCG API](https://docs.pokemontcg.io/)

## Getting Started

> [!NOTE]
>
> To get started with the development:
>
> 1. Clone the repository.
> 2. **Close your IDE and open the internal folder `class-components` to avoid possible eslint errors**
> 3. Install dependencies using `npm install`.
> 4. Run the development server using `npm run dev`.

<details>
<summary>Scripts</summary>

This project includes a number of npm scripts that can be used to facilitate the development process. Below is a brief description of each:

- `build`: Compiles the TypeScript codebase using the esbuild and then builds the production version of the application with Vite.

- `dev`: Starts the Vite development server, allowing for hot module replacement and a rich development experience.

- `format`: Checks if the files in the project adhere to the formatting standards set by Prettier without writing any changes.

- `format:fix`: Formats the code in the project according to the rules specified by Prettier, rewriting all files in place.

- `lint`: Executes ESLint on the `src` directory to check for linting issues without automatically fixing them.

- `lint:fix`: Runs ESLint on the `src` directory, automatically fixing any linting errors that can be resolved without human intervention, and outputs the results with color in the terminal.

- `prepare`: Sets up Husky, which can be used to configure Git hooks to run tasks like linting before a commit.

- `preview`: Serves the production build locally using Vite's built-in static server for previewing before deployment.

- `typecheck`: Uses the TypeScript Compiler to perform type checking across the codebase without emitting JavaScript files.

- `styles`: Runs Stylelint for linting styles order without automatically fixing them

- `styles:fix`: Runs Stylelint on the `src` directory, automatically fixing any linting styles order that can be resolved without human intervention.

To run any of these scripts, you can use `npm run` followed by the script name. For example, to start the development server, you would run:

```js
npm install
npm run dev
```

</details>

## Do I Need an API-key?

This API supports requests without an API-key, but with a limitation.

If for some reason you encounter this limitation, make a `.env` file according to the `.env.example` and put you own API-key instead example.

You can get the API-key [here](https://docs.pokemontcg.io/getting-started/authentication) or contact me on [discord](https://discordapp.com/users/216174416516612096), if you are checking this work as part of a cross-check.
