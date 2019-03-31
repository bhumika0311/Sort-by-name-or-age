
// Create empty array for names and ages
let arr = []

let list = document.getElementById('list')

function append() {
    
    let br = document.createElement("br")
    let print = ""
    let name = document.getElementById('name')
    let age = document.getElementById('age')
    let m = name.value
    let n = parseInt(age.value)
    print = m + ' , ' + n + ' years '

    let node = document.createTextNode(print)
    document.getElementById('list').append(node)
    document.getElementById('list').append(br)

    // Create new object for name and age
    let a = {
        newname: m,
        newage: n
    }

    // Push the object into the array
    arr.push(a)

}

function sortName() {
    list.innerHTML = ""
        function compare(a, b) {
        if (a.newname < b.newname)
            return -1
        if (a.newname > b.newname)
            return 1
        return 0
    }

    let arr2 = arr.sort(compare)
    for (let i = 0; i < arr.length; i++) {

        let br = document.createElement("br")
        let print = ""
        let m = arr2[i].newname
        let n = arr2[i].newage
        print = m + ' , ' + n + ' years '

        let node1 = document.createTextNode(print)
        document.getElementById('list').append(node1)
        document.getElementById('list').append(br)
    }
}

function sortAge() {
    
    list.innerHTML = ""

    function compare(a, b) {
        if (a.newage < b.newage)
            return -1
        if (a.newage > b.newage)
            return 1
        return 0
    }

    let arr2 = arr.sort(compare)

    for (let i = 0; i < arr.length; i++) {
        
        let br = document.createElement("br")
        let print = ""
        let m = arr2[i].newname
        let n = arr2[i].newage
        print = m + ' , ' + n + ' years '

        let node2 = document.createTextNode(print)
        document.getElementById('list').append(node2)
        document.getElementById('list').append(br)
    }
}