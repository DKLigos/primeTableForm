import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  upload(selector){
    const input = document.querySelector(selector)

    const open = document.createElement('button')
    open.classList.add('btn')
    open.textContent = 'Открыть'

    input.insertAdjacentElement('afterend', open)

    const triggerInput = () => input.click();

    const changeHandler = event => {
      console.log()
    }


    open.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)
  }

}
