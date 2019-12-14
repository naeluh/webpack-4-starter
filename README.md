# TAG Frontend Developer Assessment

[![Netlify Status](https://api.netlify.com/api/v1/badges/0035c5ce-0a33-4b5a-b8f5-1248de15d999/deploy-status)](https://nick-hulea-third-and-grove.netlify.com)


live site --> https://nick-hulea-third-and-grove.netlify.com

## About

From the instructions in the document provided I created a repository that runs a webpack configuration that transpiles es6 and SASS to CSS and es5. 

I added 2 commands one `npm run dev` which loads a local dev server and reloads on change. It also includes a build command `npm run build` that builds a production version of the code. 

This repository also includes a configuration with Gitlab that runs the build command and deploys the site on every commit to master or builds a preview version of a pull request on Netlify.

I did not use a CSS framework for this but could have added one if needed. I feel like when projects are smaller like this it can be easier to write most of the styles from the sketch file, but for bigger projects a framework is needed. However in component driven development all code should broken into smaller pieces to keep track of changes in large projects.

I used a fetch call to pull in data from https://randomuser.me/ instead of creating mu own structured data. 

While I was developing the site I was using Google Lighthouse to audit the site.

Scores:

 - Performance: 99
 - Accessibility: 94
 - Best Practices: 100
 - SE0: 100 
 
## Develop and Build

- Clone into repository

`git clone git@gitlab.com:naeluh/tag-frontend-developer-assessment.git`

- Enter the directory

`cd tag-frontend-developer-assessment`

- Install npm modules

`npm install`

- Deploy the dev sever and start coding, all the files are in `src/` local server is http://localhost:8080 !

`npm run dev`

- Build the project to `dist/` directory

`npm run build`