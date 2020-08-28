
const BaseInss = document.getElementById('base')
const descontInss =  document.getElementById('desInss')
const BaseIRPF = document.getElementById( 'baseIRPF')
const DescontoIRPF = document.getElementById('descontoIRPF')
const salarioLiquido = document.getElementById('salarioL')

//insss
const base1= 1045.00
const base2= 2089.60
const base3= 3134.40
const base4= 6101.06

const faixa1 = 78.38
const faixa2 = 94.01
const faixa3 = 125.37
const faixa4 = 415.33

//imposto de renda

const imposto1 = 1903.98
const imposto2 = 2826.65
const imposto3 = 3751.05
const imposto4 = 4664.68

const parcelaD1 = 0
const parcelaD2 = 142.80
const parcelaD3 = 354.80
const parcelaD4 = 636.13
const parcelaD5 = 869.36





const valorB = document.getElementById('salario')
valorB.addEventListener('keyup', ()=>{
    
    BaseInss.value = valorB.value
    inss()
    iprf()
        
    
    
 })

 function inss(){
    if(valorB.value <= base1 ){
        descontInss.value = (valorB.value  * 0.075)
        BaseIRPF.value = valorB.value - (valorB.value  * 0.075)
        //DescontoIRPF.value = 0.00
        //salarioLiquido.value = BaseIRPF.value

    }

    if(valorB.value > base1 && valorB.value  <= base2 ){
        descontInss.value = ((valorB.value - base1) * 0.09) + faixa1
        BaseIRPF.value = valorB.value - descontInss.value
        
    }

    if(valorB.value > base2 && valorB.value  <= base3 ){
        descontInss.value = ((valorB.value - base2) * 0.12) + faixa1+ faixa2
        BaseIRPF.value = valorB.value - descontInss.value
        
    }

    if(valorB.value > base3 && valorB.value  <= base4 ){
        descontInss.value = ((valorB.value - base3) * 0.14) + faixa1 + faixa2 + faixa3
        BaseIRPF.value = valorB.value - descontInss.value
        
    }

    if(valorB.value > base4 ){
        descontInss.value = 713.10
        BaseIRPF.value = valorB.value - descontInss.value
        
    }


 }

 function iprf(){

    if(BaseIRPF.value <= imposto1){
        DescontoIRPF.value = 0.00
        salarioLiquido.value = BaseIRPF.value
    }

    if(BaseIRPF.value > imposto1 && BaseIRPF.value <= imposto2){
        DescontoIRPF.value = (BaseIRPF.value * 0.075) - parcelaD2
        salarioLiquido.value = BaseIRPF.value - DescontoIRPF.value
    }

    
    if(BaseIRPF.value > imposto2 && BaseIRPF.value <= imposto3){
        DescontoIRPF.value = (BaseIRPF.value * 0.15) - parcelaD3
        salarioLiquido.value = BaseIRPF.value - DescontoIRPF.value
    }

    
    if(BaseIRPF.value > imposto3 && BaseIRPF.value <= imposto4){
        DescontoIRPF.value = (BaseIRPF.value * 0.225) - parcelaD4
        salarioLiquido.value = BaseIRPF.value - DescontoIRPF.value
    }

    if(BaseIRPF.value > imposto4){
        DescontoIRPF.value = (BaseIRPF.value * 0.275) - parcelaD5
        salarioLiquido.value = BaseIRPF.value - DescontoIRPF.value
    }




 }
 

 

