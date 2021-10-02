const path = "/users/download/index.html"

const isHtml = path => {
    const comparisonString = '.html';
    const pathExt = path.slice(-5);

    if (pathExt == comparisonString) {
        return true
    }
    else{
        return false
    }
}

console.log(isHtml(path))