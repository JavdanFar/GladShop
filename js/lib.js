function GBI(id) {
    return document.getElementById(id)
}

function Import(name) {
    let baseDIR = "../pages/";
    name = name.replace(".", "/")
    console.log(file_get_contents(baseDIR + name + ".html"));
}

function file_get_contents(filename) {
    fetch(filename).then((resp) => resp.text()).then(function (data) {
        return data;
    });
}