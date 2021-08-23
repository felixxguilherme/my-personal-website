<template>

    <div class="grid__home">
        <div class="grid__content_left">
        </div>
        <div class="grid__content_right">
            <span><strong>Esses são alguns dos projetos que pude contribuir : </strong></span>

            <slider :slides="slides" />
            
            <div style="margin-top: 10px; display: flex; flex-direction: column;">                
                <span><strong>EU AMO O CERRADO - IBRAM</strong></span>

                <div class="link__align">
                    <img src="../assets/icons/link-icon.svg" alt="icon">
                    <a href="https://euamocerrado.com.br" target="_blank">
                        www.euamocerrado.com.br
                    </a>
                </div>            
            </div>         

            <div style="margin-top: 15px; text-align: center">
                <span><strong>INVENTÁRIO NACIONAL DE RESÍDUOS SÓLIDOS - SINIR</strong></span>
                <br><span> sistema interno do Ministério do Meio Ambiente </span>
            </div>
        </div>

        <social />
        
    </div>

</template>

<script>
export default {

    data() {
        return {
            slides: [
                {
                    title: '',
                    content: '',
                    imagem: require('../assets/images/lagaswebgis1.png')   
                },
                {
                    title: '',
                    content: '',
                    imagem: require('../assets/images/lagaswebgis2.png')   
                },
                {
                    title: '',
                    content: '',
                    imagem: require('../assets/images/lagaswebgis3.png')   
                },
                {
                    title: '',
                    content: '',
                    imagem: require('../assets/images/lagaswebgis4.png')   
                }
            ]
        }
    }

}
</script>

<style lang="stylus">



</style>
