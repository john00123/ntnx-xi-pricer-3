

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
