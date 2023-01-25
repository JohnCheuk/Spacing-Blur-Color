;(function(){
    const input = document.querySelectorAll('.controls input')

    function changeHandler(){


        switch(this.name){
            case'spacing':
            document.querySelector('img').style.padding = this.value + 'px'
            break
            case'blur':
            document.querySelector('img').style.filter = `blur(${this.value}px)`
            break
            case'base':
            document.querySelector('img').style.background = this.value
            document.querySelector('.hl').style.color = this.value
            break
        }
    }


    input.forEach(function(input){
        input.addEventListener('change',changeHandler)
        input.addEventListener('mousemove',changeHandler)

    })

})()