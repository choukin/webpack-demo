import './style.css'
import {cube} from './math.js'
import _ from 'lodash'
// import Print from './print'

 
// async function getcomponent() { 
    function getcomponent() {
    // return import(/* webpackChunkName: "loadsh.[Hash]" */ 'lodash').then(_=>{
    //     var element =  document.createElement('div')
    //     var _ = _.default

    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //     return element
    // }).catch(error => 'An error occurred while loading the component')
    var element =  document.createElement('div')
    // const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    let button = document.createElement('button')
    let br = document.createElement('br')

        button.innerHTML = 'Click me and look at the console'
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.appendChild(br)
        element.appendChild(button)

        // button.onclick = Print.bind(null, 'Hello webpack')
        // button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        //     let print = module.default
        //     print()
        // })

        return element

}

//  getcomponent().then(component => {
//      document.body.appendChild(component)
//  })
document.body.appendChild(getcomponent())