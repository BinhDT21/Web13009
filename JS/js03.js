function cal() {
    a = document.getElementById('ipA').value
    b = document.getElementById('ipB').value
    c = document.getElementById('ipC').value
    delta = Math.pow(parseInt(b), 2) - 4 * parseInt(a) * parseInt(c)
    x1 = ((parseInt(b) * -1) + Math.sqrt(delta)) / (2 * parseInt(a))
    x2 = ((parseInt(b) * -1) - Math.sqrt(delta)) / (2 * parseInt(a))


    if (delta < 0) {
        document.getElementById('as').innerHTML = "Phương trình vô nghiệm:"
        document.getElementById('rs1').innerHTML = ""
        document.getElementById('rs2').innerHTML = ""

    } else if (delta === 0) {
        document.getElementById('as').innerHTML = "Phương trình có nghiệm kép:"
        document.getElementById('rs1').innerHTML = "x = " + x1.toFixed(2)
        document.getElementById('rs2').innerHTML = "x = " + x2.toFixed(2)
    }
    else {
        document.getElementById('as').innerHTML = "Phương trình có 2 nghiệm:"
        document.getElementById('rs1').innerHTML = "x1 = " + x1.toFixed(2)
        document.getElementById('rs2').innerHTML = "x2 = " + x2.toFixed(2)
    }

}


function remove() {
    document.getElementById('as').innerHTML = ""
    document.getElementById('rs1').innerHTML = ""
    document.getElementById('rs2').innerHTML = ""
    document.getElementById('ipA').value=""
    document.getElementById('ipB').value=""
    document.getElementById('ipC').value=""
}