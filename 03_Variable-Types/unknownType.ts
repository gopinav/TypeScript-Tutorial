let myVari: unknown = 10;

// TODO continue with functions, here one for example

//just to avoid problems
function hasName(obj: any): obj is{name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj

}

if (hasName(myVari)){
    console.log(myVari.name)
}
// so no error anymore

(myVari as string).toUpperCase();
// (variableTreatet as TypeOfChoice).ThenApply();