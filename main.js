function run() {
    let html = document.getElementById("html").value;
    let css = "<style>" + document.querySelector(".code-editior #css").value; +"</style>";
    let js = document.querySelector(".code-editior #js").value;
    let output = document.getElementById("output");
    output.contentDocument.body.innerHTML = html + css;
    output.contentWindow.eval(js);

}
document.getElementById("html").addEventListener("keyup", run);
document.querySelector(".code-editior #css").addEventListener("keyup", run);
document.querySelector(".code-editior #js").addEventListener("keyup", run);