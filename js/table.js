
// price variable
let price = 100000

//title data
let j = ['',
'Cloud Cost Percentage','Billing Period','Monthly Cost','Annual Cost','']

//table data
const data = [
  {
    name:'Monthly Plan',
    description:'Most flexible deal',
    perc: 0.0475,
    period:'Monthly',
    month: 1,
    year: 1,
  },
  {
    name:'Annual Commitment',
    description:'Predictable billing',
    perc: 0.0425,
    period:'Monthly',
    month: 1,
    year: 1
  },
  {
    name:'Single Payment',
    description:'Most Popular',
    perc: 0.0375,
    period:'Annual',
    month: 0,
    year: 1
  }
]

//create table container
$('container').append(`
  <div class="table-holder" card fw>
    <table cellspacing="0"></table>
  </div>`)

//add data to table
$('table').append(`
  <tr><th/>
    ${data.map(v =>`<th>${v.name}<br>
     <span alt>${v.description}</span></th>`)}
  </tr>
  <tr> ${data.map(v =>`<td>${v.perc*100}%</td>`)} </tr>
  <tr> ${data.map(v =>`<td>${v.period  } </td>`)} </tr>

  <tr> ${data.map(v => v.period !== 'Annual' ?
      `<td class='calc'>$${price * v.perc}.00 </td>` :
      `<td fade> - </td>`)}
  </tr>

  <tr> ${data.map(v =>`<td class='calc2'>$
       ${price * v.perc*12}.00</td>`)}
  </tr>
  <tr> ${data.map(v =>`<td><button primary fw> Select</button></td>`)}</tr>
  `);

//add first colum titles
for(let i=1; i<j.length; i++){ $('tr').eq(i).prepend(`<td>${j[i]}</td>`)}


////////////////////////////////////////////////////////////////////



//create main containers

const info =[
  {
  title:'Company information',
  description:'Because there is no organization associated with this account, we need some basic information. This will make this account the administrator of the organization. Please verify this with your company before proceeding.',
  forms:['Company Name','Address','Zip Code','City','State','Country']
  },
  {
    title:'Payment Method',
    description:'Add a payment method to your Nutanix Account to get started connecting to {Service}.<br><br>By continuing, you create a Nutanix Payments account <br> and agree to the <a>Terms of Service</a> and <a>Privacy Notice</a>',
    forms:['Card Number',"Card Holder's Name",'Exp. Date','CVV','Address','Zip Code','City','State','Country']
  }
]

$('container').append(`<div class='company-info' card fw></div>`);


//Forms
info.map(value => $('.company-info').append(`
  <div class='two-col-block' fw hsd>
    <div class='block-one' fw>
      <h3 style='margin-top:0' fw>${value.title}</h3>
      <p alt>${value.description}</p>
    </div>
    <form>
      ${value.forms.map(input =>
        `<label>${input}</label><input type=text></input>`).join('')
      }
    </form>
  </div>
`));


//Form main text
$('.company-info').prepend(
  `<div class='block-one' vss>
    <h2>Company Details</h2>
    <p alt>
      When you create a {Service} Account, we ask for some personal information. This info helps keep your account secure and makes our services more useful.
    </p>
  </div>
`
)


//checkout modules

let review =[
  {
  name:'Payment Plan',
  description:'Single Payment Annual Plan',
  action:'<button secondary>Edit</button>'
  },

  {
  name:'Company Details',
  description:'Nutanix <br>1740 Technology Dr #150, San Jose, CA 95110',
  action:'<button secondary>Edit</button>'
  },

  {
  name:'Payment Method',
  description:'Master Card <br> Ending in 3498',
  action:'<button secondary>Edit</button>'
  },
  {
  name:'Automatic Renewal',
  description:'Your plan will automatically renew on 12 December 2020',
  action:'<button secondary>Off</button>'
  },
  {
  name:'Tax Documentation',
  description:'No document has been uploaded',
  action:'<button secondary>Upload</button>'
  },
  {
  name:'Deal Registration Number',
  description:'No partner associated',
  action:'<input secondary></input>'
  },

]

/////////////////////////////////////////////


//Checkout block
let summary = ['Annual Plan','$45000']
let summary2 = ['Subtotal','$45000']
let summary3 = ['Total','$45000']


$('container').append(`<div class='checkout-holder' fw hsd></div>`)

$('.checkout-holder').append(`
  <div card class='block-one sixty' vss>
    <h2 fw> Review and Confirm </h2>
    <p alt> Beam subscriptions are based on how much you spend on the cloud.<br> Provide an estimate of your month cloud expenses & pick a payment plan to continue</p>
  </div>
`)

$('.sixty').append(review.map(value => `
    <div class='review-group' fw hcd>
      <section>
        <h3>${value.name}</h3>
        <p alt> ${value.description}</p>
      </section>
      ${value.action}
    </div>
  `)
)


$('container').append(`
    <div card fw hcd><br>
      <img height=240 style='padding:0 50px' src='img/complete2.svg'><br><br>
      <div fw style='margin-left:40px'>
        <h2 fw>Dear {User}, congratulations</h2>
        <p alt > We would like to thank you for registering your {Service} account.<br>We have sent you an activation email. <a>Resend email</a><br><br>

        After activating your account, you will be able to access {service}'s' platform, and all our support and community services. <br>Go {back} to your <a>Account Page.</a></p>
        <br><br>
        <button primary> Go to {Service}</button>
      </div>
    </div>
  `
)

//confirmation purple  box

$('.checkout-holder').append(`
  <div card class='checkout'fw>
    <h2 fw>Order Summary</h2>
    <div hcd>
      ${summary.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <div hcd>
      ${summary2.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <div hcd>
      ${summary3.map(value=>`<h3>${value}</h3>`).join('')}
    </div>
    <br>
  </div>
`)

$('.checkout').append(`
  <div class='confirmation'>
    <div class='dark'>
      <label> Promotional code </label>
      <input type='text' class='dark'></input>
    </div>
    <button primary fw>Complete purchase</button>
  </div>`
);
