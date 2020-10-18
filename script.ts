var array=[];
class locations{
    name:string;
    address:string;
    image:string;
constructor(name: string, address: string, image:string){
    this.name = name;
    this.address = address;
    this.image = image;
    array.push(this);
}
render(){
        return `<div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.image}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">City: ${this.address}</p>
        </div>
        
    </div>`
}
}
class restaurant extends locations{
   

    site: string;
    constructor(name: string, address: string, image:string,  site: string){
    super(name, address, image);
   
    this.site = site;
}
render(){
    return `
<div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.image}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">Address: ${this.address}</p>
            <p><a href="${this.site}">${this.site}</a></p>
        </div>
       
</div>
    `
}
}
class events extends locations{
    date: string;
    time: string;
    price:string;
    link: string;
    constructor(name: string, address: string, image:string,date:string, time:string, price:string, link: string){
        super(name, address, image);
        this.date = date;
        this.time = time;
        this.price = price;
        this.link = link;
    }
    render(){
        return`
        <div class="card col-md-6 col-lg-3 border bg-light">
        <img class="card-img-top p-2" src="${this.image}">
        <div class="card-body">
            <h5 class="card-title">Name: ${this.name}</h5>
            <p class="card-text">Address: ${this.address}</p>
            <p>Event_place: ${this.date}</p>
            <p>Event_time: ${this.time}</p>
            <p>Ticket_Price: ${this.price}</p>
                <p><a href="${this.link}">${this.link}</a></p>
        </div>
       
</div>
        `
    }
}
new locations('St. Charles Church','Karlsplatz 1, 1010 Vienna','img/1.jpg')
new locations('Zoo Vienna','Maxingstraße 13b, 1130 Wien','img/2.jpg')
new restaurant('Lemon Leaf Thai Restaurant','Kettenbrückengasse 19, 1050 Vienna, +43(1)5812308','img/3.jpg','www.lemonleaf.at')
new restaurant('SIXTA','1050 Wien, Schönbrunner Straße 21 ,  +43 1 58 528 56','img/4.jpg','http://www.sixta-restaurant.at/')
new events('Kris Kristofferson','Wiener Stadthalle,1150 Wien','img/5.jpg','15.11.2021','22:00','58 Eur','http://kriskristofferson.com/')
new events('Lenny Kravitz','Wiener Stadthalle - Halle D, Roland Rainer Platz 1, 1150 Wien','img/6.jpg','09.12.2029','22:00','47  Eur','www.lennykravitz.com/')
for(let x in array)
{
    $("#travel").append(array[x].render());
}







