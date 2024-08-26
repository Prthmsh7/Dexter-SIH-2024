const Admin = require('../model/admin');
const Invoice = require('../model/invoice');
// follow the below pattern for creating controllers for a particular  endpoint

const firstapi = (req,res)=>{

    try {

        //Write down the api logic here 

        res.json({message: "this is  first api"})
        
    } catch (error) {
        res.json(error)
    }
}

const createadmin = async (req,res) =>{
    try {
        const { name,
        email,
        organization,
        subscription,
        profileimg,
        } = req.body;

        if(!(email && name && subscription)){
            res.json({message: 'All the fields are required'})
        }
        else{

            const data = await Admin.create({ name,
                email,
                organization,
                subscription,
                profileimg,
                });

            if(data){
                res.json({message: 'created' , admin:data});
            }
            else{
                res.json({message: 'something went wrong'});
            }    

        }
        
    } catch (error) {
        res.json(error)
    }
}



const createinvoice = async (req,res) =>{
    try {
        const {  
        name,
        from,
        to,
        amount,
        } = req.body;

        if(!(from && name && to && amount )){
            res.json({message: 'All the fields are required'})
        }
        else{

            const data = await Invoice.create({
                name,
                from,
                to,
                amount
                 });

            if(data){
                res.json({message: 'created' , invoice:data});
            }
            else{
                res.json({message: 'something went wrong'});
            }    

        }
        
    } catch (error) {
        res.json(error)
    }
}




module.exports = {firstapi , createadmin, createinvoice}; //export all the controllers declared above 