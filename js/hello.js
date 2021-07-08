const functionscope = () => {
    var scope = " i am just local";
    const func = () => {
        return scope
    }
    console.log(func());
};