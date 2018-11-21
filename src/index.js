import _ from 'lodash'
import './style.css'
import {cube} from './math.js'

if (process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in Development Mode')
}
function component() { 
    var element = document.createElement('pre')
    var btn = document.createElement('button')
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'click me and check the console!'
    // btn.onclick = printMe

    // element.appendChild(btn)
    element.innerHTML = [
        'hello webpack',
        'S cubed is equal to ' + cube(5)
    ]
    return element
}

document.body.appendChild(component())

// if (module.hot) {
//     module.hot.accept('./print.js', function(){
//         console.log('Accepting the updated printMe module!')
//         printMe()
//     })
// }