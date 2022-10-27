
# Welcome 🥳

-   ## 1.) Get your Starter Kit
    
    Clone the starter kit from github. Use your preferred command line with the command `git clone https://github.com/majd-albandik/Angular-bootcamp.git`
    
-   ## 2.) Start the project
    
    -   Install all required dependencies  `npm install`
    -   Install JSON Server  `npm install -g json-server`
    -   Now you can start the project `npm run start` (For Angular Project) and  `npm run server`  for starting the backend server (API)
    
    Now you should see the project in the browser (normally under `http://localhost:4200/`). You can also access the API data in the browser under:  `http://localhost:3000/cars`
    
    -   Create your own Git-branch with your name e.g.  `max-mustermann-branch`  , where you will later push your changes.
    -   Change the  `name`  property in  `src/app/components/welcome/welcome.component.ts`  with your name and then push the changes to your own branch.
    
-   ## 3.) Attention! To execute these exercises, you don’t need to think about any project settings and third-party libraries!
    
    All what you need is preconfigured 😉. Of course, if you wish, everything is in your hands. =)
    
    For styling and customizing the App, you can use the integrated  `tailwindcss`  , which helps you rapidly to style websites without leaving your HTML, but feel free to use normal CSS or even another UI-Framework.
-   ## 4.) API Endpoints:
    
    ```
    -   GET /car
    -   GET /car/1
    -   POST /car
    -   DELETE /car/1
    ```
-   ## 5.) Small overview of project structure:
    
    -   Header section (Navbar) - is used to display the title of our project "Angular Bootcamp" and the navigation links to other pages
    -   Main section - will be used to display content of our application
