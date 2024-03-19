function introduction(Aki) {
    return `Hi, my name is ${Aki}.`;
}

function introductionWithLanguage(name, language) {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}


let akiIntroduction = introductionWithLanguage("Aki", "Ember");
let samipIntroduction = introductionWithLanguage("Samip", "React");

if (akiIntroduction === samipIntroduction) {
    console.log("Both introductions are the same.");
} else {
    console.log("The introductions are different.");
}
function introductionWithLanguageOptional(name, language="JavaScript") {
    return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}