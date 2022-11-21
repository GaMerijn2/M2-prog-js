class App
{
    runApplication()
    {
        console.log("Hello World!");
        //code gaat hier onder!
        let appNaam = "Les1";
        let versienummer = 0.9;
        let versiedatum = "21-11-2022";
        let autheur = "Merijn";
        let copyright = "ja";
        let distributeur = "geen idee";
        let darkmode = true;

        console.log(appNaam)
        console.log(versienummer)
        console.log(versiedatum)
        console.log(autheur)
        console.log(copyright)
        console.log(distributeur)
        console.log(darkmode)
    }
}

let app = new App();
app.runApplication();
