/*
    Ways to connect javascript file to html file

    1.  
    <head>
        <script src="./script.js"></script>
    </head>

    - firstly Html file goes to browser then browser parse this html file line by line

    - then browser encounter with script.js then load whole file and browser stop parsing
        1. Browser load's js file
        2. Then runs the Js file
        3. if our js file require html data to run then it will through err, because our browser stop parsing at the time of encountered js file and its time consuming

        so this method is wrong way

    2.
    <body>
    ...
        <script src="./script.js"></script>
    </body>

        - Browser gets html file and start parsing till it encounters the script tag
        - now our script tag at bottom of the body tag so our whole html gets parsed.
        - now our js file gets loaded (loading requires extra time)
        - now our js file gets executed (execution requires time)
        - because of successful parsing of html file js will not encounter any err

        but here is a catch this process is synchronous so it requires a lot of time

        so this method is wrong way
    
    3. 

    <head>
        <script src="./script.js" async></script>
    </head>

        - Browser get html and starts parsing it
        - now browser encounters js file and here is an attribute called async which tells browser to work asynchronous (parallel) with js file
        - so browser continuous parsing html file and loading js file simultaneously
        - now our js file loaded successfully but our html file not parsed completely
        - now browser stops the parsing of html file and starts executing js file which lead to errors while executing js file

        so this method is wrong way

    4.

    <head>
        <script src="./script.js" defer></script>
    </head>

    A script that will be downloaded in parallel to parsing the page, and executed after the page has finished parsing

    - browser parse html and load js file parallel
    - after successfully loading of js file 
    - browser simply completes its parsing and after that it will starts execution of js file

    so we reduce time by parallel loading and js will not encounter any err 

    so its best way to link js file

*/