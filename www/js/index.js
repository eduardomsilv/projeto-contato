

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

let app = { 
    
    contatoSelecionado : null,

    inicializar: function() {
        console.log("inicializar: function(){...");
        document.addEventListener('deviceready', meuapp.onDeviceReady, false);
        document.addEventListener('onResume', meuapp.retornoAoPrimeiroPlano, false);
    },

    onMyDeviceReady: function() {
        console.log('####=> Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById("btnSelecionaContato").addEventListener('click', meuapp.selecionarContato)
},

retornoAoPrimeiroPlano: function(onResumeEvent){
    console.log("retornoAoPrimeiroPlano: function(){...");

},
    selecionaContato: function(){
        console.log("selecionaContato: function(){...");
        navigator.contacts.pickContact(function(c){
            console.log("###=> Contato Selecionado");
            console.log(c);
            meuapp.contatoSelecionado = c;
            console.log(c.displayName);
            let.spanElement = document.getElementById("nomeDoContato").innerHTML = c.displayName;
            console.log(spanElement);

            console.log(c.photos);
            let imgElement = document.getElementById("imgDoContato");
            console.log("Tag Imagem...");
            console.log(imgElement);
            console.log("Value do obj Imagem do array photos");
            console.log(c.photos[0].value);
            
            imgElement.scr = c.photos[0].value;
            
        },function(err){   
            console.log("###=> Contato não Selecionado");
            console.log("err");
        });
    }
}