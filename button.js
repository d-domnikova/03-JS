var text = document.getElementById('elem').textContent;

function str_del(){
    var line = document.getElementById('elem').textContent;
    document.getElementById('elem').textContent = line.slice(0, -1); 

    if (line.length === 1 ) {
        document.getElementById('elem').appendChild(document.createTextNode(text)); //instead of removing the last character, the full text will appear again
    }
}