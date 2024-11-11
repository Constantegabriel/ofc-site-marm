import Link from "next/link";

export default function Home() {
    return (

    <section>
    <div className="barra">
      <div className="barra-logo">
        <img src="/logo.jpeg" className="logo"></img>
        </div>
        <h1 className="text-barra">Marmoraria Florianópolis</h1>
        <div className="buttons">
      <Link href={'/'} className="link-sobre"><button className="btn">HOME</button></Link>
      <Link href={'./empresa'} className="link-sobre"><button className="btn">EMPRESA</button></Link>
      <Link href={'./materiais'} className="link-serviços"><button className="btn">MATERIAIS</button></Link>
      <Link href={'./trabalhos'} className="link-trabalhos"><button className="btn">TRABALHOS</button></Link>
      <Link href={'./parceiros'} className="link-parceiros"><button className="btn">PARCEIROS</button></Link>
      <Link href={'./contatos'} className="link-contatos"><button className="btn">CONTATOS</button></Link>
      <Link href=" https://whatsapp.com/dl/."><button className="button-whatsapp">WhatsApp</button></Link>
      </div>
    </div>
<div className="foto-contatos">
<img src="back-contato1.png" className="foto-ctt"></img>
<h1 className="text-ft">VENHA FAZER SEU ORÇAMENTO</h1>
</div>

<div className="text-cttt">
  <h1 className="entre-ctt">ENTRE EM CONTATO</h1>
</div>
<div className="redes-ctt">


<div className="email-ctt">
<img src="email-ctt.png" className="icon-ctt1"></img>
  <h1 className="title-ctt">EMAIL</h1>
  <Link href=""><button className="email-btn">marmorariaaaa@gmail.com</button></Link>
</div>



<div className="telefone-ctt">
  <img src="phone-ctt.png" className="icon-ctt2"></img>
  <h1 className="title-ctt">TELEFONES</h1>
<Link href=""><button className="email-btn">(48)99999-9990</button></Link>
<Link href=""><button className="email-btn">(48)99999-9999</button></Link>
</div>



<div className="midias-ctt">
<img src="insta-ctt.png" className="icon-ctt3"></img>
  <h1 className="title-ctt">REDES SOCIAIS</h1>
<Link href=""><button className="email-btn">instagram</button></Link>
</div>



</div>


<div className="footer">
<div className="footer-inicio"></div>
<div className="footer-barra">
<div className="footer-text">

<div className="text-f">
<h1 className="f-f">MARMORARIA FLORIANÒPOLIS</h1>
<h2 className="f-f1">A Marmoraria Florianópolis está situada <br></br>em Florianópolis, no estado de Santa Catarina desde 2222.</h2>
</div>


<div className="text-f">
<h1 className="f-f">ONDE NOS ENCONTRAR</h1>
<h2 className="f-f2">Rua 123, 1234 - Centro, Florianópolis, Santa Catarina, 88000-000</h2>
<h2 className="f-f2">CEP:00000-000</h2>
</div>


<div className="text-f">
<h1 className="f-f">FALE CONOSCO</h1>
<h2 className="f-f3">Fone:(48)9999-9999</h2>
<h2 className="f-f3">WhatsApp:(48)99999-9999</h2>
<h2 className="f-f3">Email: marmorariaaaaaa@gmail.com</h2>
</div> 

</div>
</div>

<div className="footer-fim">
  <h1 className="desenvolvido">Desenvolvido em 2024 por</h1>
<Link href="https://www.instagram.com/constante.design_/?utm_source=ig_web_button_share_sheet" className="desenvolvido1">CONSTANTE</Link>
</div>

  </div>






    </section>
    )
}