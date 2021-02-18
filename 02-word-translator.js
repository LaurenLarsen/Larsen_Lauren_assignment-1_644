/* Usage: Use simple conditional statements
Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example):

Hello World translated in French is: Bonjour le monde */

let langauge = prompt("Enter Your Language: ES, DE, EN, FR");
if (langauge === "ES"){
    alert("Hola Mundo");
} else if (langauge === "DE"){
    alert("Hallo Welt");
} else if (langauge === "EN"){
    alert("Hello World");
} else if (langauge === "FR"){
    alert("Bonjour le Monde");
} else{
    alert("That Is not a language option")
}