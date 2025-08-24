const btns = document.querySelectorAll('.button');
const body = document.querySelector('body')

btns.forEach(function(button){
    console.log(button);
    button.addEventListener('click', function(e) {
        console.log(e);
        console.log(e.target);
        let color = e.target.id;
        switch (color) {
            case 'red':
                body.style.backgroundColor = color
                break;
            case 'grey':
                body.style.backgroundColor = color
                break;
            case 'blue':
                body.style.backgroundColor = color
                break;
            case 'white':
                body.style.backgroundColor = color
                break;
            case 'yellow':
                body.style.backgroundColor = color
                break;
            default:
                break;
        }
    })
})