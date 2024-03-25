export default function Certificado() {
  //get current date in day of month of the year format
  const date = new Date();
  const stringDate = date.toLocaleDateString('pt-BR')

  return (
  <div
      dangerouslySetInnerHTML={{
        __html: `

    
	<div style="max-width: 1000px">
		<h1 style="margin-top:0.5cm;margin-left:5%;width:90%;height:5px;border-top:5px solid #b5171f;"></h1>
	    <div style="display:block;margin-left:5%;width:90%;height:15cm;">
	    	<div style="float:left;width:30%;">
	    		<img height="400px" style="margin-top:0.3cm; max-height: 500px" src="https://seminario2016.ccsa.ufrn.br/assets//img/logo595.png">
	    	</div>
	    	<div style="float:right;width:70%;">
	    		<h1 style="color:#b5171f !important; text-align:center;margin-top:0.0cm; margin-bottom: 2cm; font-size:46px;">CERTIFICADO</h1>
	    		
                
                <p style="margin-left:1.5cm;font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;;margin-right:1.5cm;height:5.5cm;text-align:justify;font-size:16px;margin-top:1cm;overflow:hidden;">
	    		    Certificamos que CARLOS ANDRé MACIEL PINHEIRO PEREIRA  E  AMANDA OLIVEIRA DA CâMARA MOREIRA  apresentaram o pôster: "A QUESTãO DA SECA E A DIMENSãO JURíDICA DO ACESSO A áGUA" GT - NEOCONSTITUCIONALISMO: DA TEORIA à REALIDADE, recebendo o prêmio de melhor trabalho do respectivo GT, no XXI SEMINÁRIO DE PESQUISA DO CCSA - "CIDADANIA EM TEMPOS DE INTOLERÂNCIA", realizada no Centro de Ciências Sociais Aplicadas da Universidade Federal do Rio Grande do Norte.                </p>

                	    		    <p style="text-align:right;font-size:21px;margin-right:1.5cm;margin-top:0.5cm;font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;">Natal, ${stringDate}</p>
	    		
                <div style="margin-top:1cm;text-align:center;">
	    			<!--<img height="35px" src="https://seminario2016.ccsa.ufrn.br/assets//signature.jpg" >-->
	    		</div>
	    		<p style="text-align:center;font-size:21px;font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;">Maria Arlete Duarte de Araújo</p>
	    		<p style="text-align:center;font-size:21px;margin-top:-0.3cm;font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;">Coordenadora Geral</p>
	    	</div>
	    </div>
	    <h1 style="margin-top:0.5cm;margin-left:5%;width:90%;border-bottom:5px solid #b5171f;font-size:10px;">Para verificar a validade do certificado entre em <b>www.seminario.ccsa.ufrn.br/133045po344127</b></h1>
	</div>
	<div style="text-align:center;width:27.7cm;">
		<a id="btn-print" style="cursor:pointer;font-size:22px;font-weight:bold;" onclick="window.print();">IMPRIMIR CERTIFICADO</a>
	</div>
`,
      }}
    />
  )
}
