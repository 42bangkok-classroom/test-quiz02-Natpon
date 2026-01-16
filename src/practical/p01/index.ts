import axios from "axios";
interface Output{
    id: number;
    name: string;
    phone: string;
    address: Address;
}
interface Geo{
    lat: string;
    lng: string;
}
interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}
interface Address {
    street:string;
    suite: string;
    city: string;
    zibcode: string;
    geo: Geo;
}
interface DATA {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    company: Company;
}
export ansync function getPostalAddress() {
    try{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    /*const D : Output[]=[];
    for(const dd of data){
        D += dd;*/
           
    //}
    if(data.length !== 0){
        return data:Output;
    }
    
}
}