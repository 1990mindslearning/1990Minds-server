module.exports = ({name,Net_Salary,Gross_Salary,Basic,DA,HRA,designation,professional_tax,deductions_LOP,deductions_WFH,month,conveyance }) => {
  


    
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example 2</title>
    <style>
    @font-face {
      font-family: SourceSansPro;
      src: url(SourceSansPro-Regular.ttf);
    }
    
    .clearfix:after {
      content: "";
      display: table;
      clear: both;
      margin-right:20px;
    }
    
    
    a {
      color: #0087C3;
      text-decoration: none;
    }
    
    body {
      position: relative;
      width: 19cm;  
      height: 29.7cm; 
      margin: 10 auto; 
      color: #555555;
      background: #FFFFFF; 
      font-family: Arial, sans-serif; 
      font-size: 10px; 
      font-family: SourceSansPro;
  
    }
    
    header {
      padding: 10px 0;
      margin-bottom: 20px;
      border-bottom: 1px solid #AAAAAA;
      background: #ffffff00; 
      
    }
    
    #logo {
      float: left;
      margin-top: 8px;
    }
    
    #logo img {
      height: 70px;
    }
    
    #company {
      float: right;
      text-align: right;
      margin-right:150px;
    }
    
    
    #details {
      margin-bottom: 50px;
    }
    
    #client {
      padding-left: 10px;
      border-left: 6px solid #5e5f5d;
      float: left;
      
      font-size: 1.2em;
    }
    
    
    #client .to {
      color: #777777;
    }
    
    h2.name {
      font-size: 1.4em;
      font-weight: bold;
      margin: 0;
    }
    
    #invoice {
      float: right;
      text-align: right;
    }
    
    #invoice h1 {
      color: #0087C3;
      font-size: 2.4em;
      line-height: 1em;
      font-weight: normal;
      margin: 0  0 10px 0;
    }
    
    #invoice .date {
      font-size: 1.1em;
      color: #777777;
    }
    
    table {
      width: 80%;
      border-collapse: collapse;
      border-spacing: 0;
      margin-bottom: 20px;
      margin-top: 2em;
      text-align: center;
      padding-left:10px;
      padding-right:10px;
      
    }
    
    table th,
    table td {
      padding: 10px;
      background: #EEEEEE;
      text-align: center;
      border-bottom: 1px solid #FFFFFF;
    
    }
    
    table th {
      white-space: nowrap;        
      font-weight: bold;
      font-size: 1.2em;
      background: #EEEEEE;
    
    }
    
    table td {
      text-align: center;
    }
    
    table td h3{
      color: #5e5f5d;
      font-size: 1.2em;
      font-weight: normal;
      margin: 0 0 0.2em 0;
    }
    
    table .no {
      color: #FFFFFF;
      font-size: 1.2em;
      background: #5e5f5d;
    }
    
    table .desc {
      text-align: left;
    }
    
    table .unit {
      background: #DDDDDD;
    }
    
    table .qty {
    }
    
    table .total {
      background: #5e5f5d;
      color: #FFFFFF;
    }
    
    table td.unit,
    table td.qty,
    table td.total {
      font-size: 1.2em;
    }
    
    table tbody tr:last-child td {
      border: none;
    }
    
    table tfoot td {
      padding: 10px 20px;
      background: #FFFFFF;
      border-bottom: none;
      font-size: 1.2em;
     
      border-top: 1px solid #AAAAAA; 
      text-align: center;
    }
    
    table tfoot tr:first-child td {
      border-top: none; 
    }
    
    table tfoot tr:last-child td {
      color: #57B223;
      font-size: 1.4em;
      border-top: 1px solid #57B223; 
    
    }
    
    table tfoot tr td:first-child {
      border: none;
    }
    
    #thanks{
      font-size: 2em;
      margin-bottom: 50px;
    }
    
    #notices{
      padding-left: 6px;
      border-left: 6px solid #0087C3;  
    }
    
    #notices .notice {
      font-size: 1.2em;
    }
    
    footer {
      color: #777777;
      width: 100%;
      height: 30px;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #AAAAAA;
      padding: 8px 0;
      text-align: center;
    }
    
    
    </style>
    </head>
    <body>
      <header class="clearfix">
        <div id="logo">
          <img src="https://firebasestorage.googleapis.com/v0/b/minds-6da65.appspot.com/o/logo%2Flogo%201990-01-02.png?alt=media&token=56f4f988-5e1d-4495-91cc-38930cf5131a">
        </div>
        <div id="company">
          <h2 class="name">1990minds & Co.</h2>
          <div>Registered office : 666/1, 10th Cross </br> K R Puram, Hassan - 573201 </div>
          <div><a href="mailto:company@example.com"></a></div>
        </div>
        </div>
      </header>
      <main>
        <div id="comp" class="clearfix">
          <div id="client">
            <div class="name">Employee Name : ${name}</div>
            <div class="Designation">Designation : ${designation} </div>
            <div class="Month">Month : ${month}</div>
          </div>
          
          <div id="invoice">
           
            
        </div>
  
      </div>
  
  
        <table border="0" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th class="no">#</th>
              <th class="desc">Particulars</th>
              <th class="unit">Breakup %</th>
              <th class="total">Breakup in Rs.</th>
  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="no">01</td>
              <td class="desc"><h3>Basic</h3></td>
              <td class="unit">45%</td>
              <td class="total">${Basic}</td>
            </tr>
            <tr>
              <td class="no">02</td>
              <td class="desc"><h3>DA</h3></td>
              <td class="unit">20%</td>
              <td class="total">${DA}</td>
            </tr>
            <tr>
              <td class="no">03</td>
              <td class="desc"><h3>HRA</h3></td>
              <td class="unit">25%</td>
              <td class="total">${HRA}</td>
            </tr>
            <tr>
              <td class="no">03</td>
              <td class="desc"><h3>Conveyence</h3></td>
              <td class="unit">10%</td>
              <td class="total">${conveyance}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2"></td>
              <td colspan="1">Gross Salary</td>
              <td>${Gross_Salary}</td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td colspan="1">Professional Tax</td>
              <td>${professional_tax}</td>
            </tr>



            <tr>
              <td colspan="2"></td>
              <td colspan="1">Deductions LOP</td>
              <td>${deductions_LOP}</td>
            </tr>
            <tr>
              <td colspan="2"></td>
              <td colspan="1">Deductions WFH</td>
              <td>${deductions_WFH}</td>
            </tr>

            <tr>
              <td colspan="2"></td>
              <td colspan="1">Net Salary</td>
              <td>${Net_Salary}</td>
            </tr>
          </tfoot>
        </table>
        <div id="thanks">Thank you!</div>
        <!-- <div id="notices">
          <div>NOTICE:</div>
          <div class="notice">A finance charge of 1.5% will be made on unpaid balances after 30 days.</div>
        </div> -->
      </main>
      <footer>
        Write to hr@1990minds.com for any query.
      </footer>
    </body>
  </html>
  `;
};