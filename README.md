# World News Headlines


World News Headlines is a simple and easy-to-use app that returns headlines currently published on a range of news sources and blogs (70 and counting so far). Use it to get live news headlines!. You can follow the read more links to be redirected to various news websites to read the full news articles.


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.2. and powered by News API (newsapi.org)that returns JSON metadata for the headlines. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

## API key
Get an API key from https://newsapi.org/ and replace your-api-key in the getchannels.services.ts on line 16 "return this.http.get('https://newsapi.org/v1/articles?source='+source+'&apiKey=your-api-key').map(res => res.json());
 )

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Start App
Run `ng serve` to start the app

## Demo App Online


## Running unit tests (Optional)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests (Optional)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


