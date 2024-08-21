


function cal() {
    let operation = document.querySelector("input[name='operation']:checked").value
    let a = parseInt(document.getElementById('a').value)
    let b = parseInt(document.getElementById('b').value)
    let result = 0
    switch (operation) {
        case "1":
            result = a + b
            break;
        case "2":
            result = a - b
            break
        case "3":
            result = a * b
            break

        default:
            result = a / b
            break;
    }
    
    document.getElementById('rs').value = result.toFixed(2)
}