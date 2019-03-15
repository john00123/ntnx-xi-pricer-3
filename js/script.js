
$('container').append(
  `<div card fw hsd>
    <div class='block-one' vss>
      <h2>Input your monthly cloud cost </h2>

      <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses.</p><p style='margin: 0 0 20px 0'>If your expenses surpases the $400,000 dollars.<br><a>Contact our sales team</a> </p>

      <div class='input-currency'>
        <label> Monthly cloud cost</label>
        <input class='calc0' pattern="[0-9]*" type='text' placeholder='eg. 100,000'/>
      </div>
    </div>

    <img logo height=300px src='img/bg.png'/>
   </div>
  `
)


//input operations
$('.calc0').on('input', function(){
  price = this.value;
  i=0;
  //month calc
  data.map(value => {


    $(`.calc:eq(${i})`).text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc)) }.00`);
    i++;
  }

  );

  i=0;
  //year calc
  data.map( value=>{
    $(`.calc2:eq(${i})`).text(`$ ${new Intl.NumberFormat().format(
      Math.round(price * value.perc*12))}.00`)
    i++;
  }
  );
  i=0;

})
