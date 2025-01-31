# React Native Project with Expo

This is an advanced React Native project built using Expo and leveraging modern development practices, libraries, and tooling.

## Features

- Functional React components for a modular and reusable codebase
- Tailwind CSS for efficient and responsive styling
- NativeWind for styling
- Zustand for simple and scalable state management
- Expo router for navigation
- Expo for streamlined development and deployment
- TypeScript for enhanced type safety and developer productivity
- ESLint and Prettier for consistent code style and quality

## TODO
- Add https://docs.expo.dev/guides/react-compiler/ EXPERIMENTAL

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- Expo CLI (version X.X.X)
- EAS CLI (version X.X.X)
- Yarn (version X.X.X)
- [dotenvx](https://dotenvx.com/)
- [i18n-ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/b4rtt/cirquee.git
   ```

2. Navigate to the project directory:
   ```
   cd cirquee
   ```

3. Install the dependencies using Yarn or npm:
   ```
   yarn install
   ```
   or
   ```
   npm install
   ```

### Running the App

1. Start the development server:
   ```
   yarn start
   ```
   or
   ```
   yarn start:dev
   ```

2. Start the app on Android:
   ```
   yarn android
   ```
   or
   ```
   yarn android:dev
   ```

3. Start the app on Web:
   ```
   yarn web
   ```
   or
   ```
   yarn web:dev
   ```

### Building the App

To build the app for production:

1. Build the app using Expo:
   ```
   eas build -p android
   ```
   or
   ```
   eas build -p ios
   ```

2. Follow the Expo build process to generate the production-ready app.

## Project Structure

- `src/components`: Contains reusable components used throughout the app.
- `src/screens`: Contains the main screens of the app.
- `src/hooks`: Contains custom hooks for managing state and logic.
- `src/store`: Contains the Zustand store for global state management.
- `src/utils`: Contains utility functions and helpers.
- `src/types`: Contains TypeScript type definitions.

## Development Workflow

1. Create a new branch for each feature or bug fix:
   ```
   git checkout -b feature/your-feature
   ```

2. Implement the changes and ensure the code follows the project's style guide.

3. Write tests for the added or modified functionality.

4. Run the tests and ensure they pass:
   ```
   yarn test
   ```

5. Commit your changes with descriptive commit messages:
   ```
   git commit -m "Add feature: your feature description"
   ```

6. Push the branch to the remote repository:
   ```
   git push origin feature/your-feature
   ```

7. Open a pull request on GitHub and request a code review.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the project's code of conduct.

## License

This project is licensed under the [MIT License](LICENSE).



cirquee.app@gmail.com