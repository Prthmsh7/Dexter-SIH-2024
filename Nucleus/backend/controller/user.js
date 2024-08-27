const User  = require('../model/user')

// follow the below pattern for creating controllers for a particular  endpoint

const firstapi = (req,res)=>{

    try {

        //Write down the api logic here 

        res.json({message: "this is  first api"})
        
    } catch (error) {
        res.json(error)
    }
}


const createuser = async (req,res) =>{
    try {
        const {  
        name,
        email,
        gender,
        skills,
        github,
        about,
        profileimg,} = req.body;

        if(!(email && name && gender && skills && github && about )){
            res.json({message: 'All the fields are required'})
        }
        else{

            const data = await User.create({
                name,
                email,
                gender,
                skills,
                github,
                about,
                });

            if(data){
                res.json({message: 'created' , user:data});
            }
            else{
                res.json({message: 'something went wrong'});
            }    

        }
        
    } catch (error) {
        res.json(error)
    }
}


const finduser = async (req,res) =>{
    try {
        const { 
        id
        } = req.body;

        if(!id){
            res.json({message: 'id is required'})
        }
        else{

            const data = await User.findOne({_id: id});

            if(data){
                res.json({user:data});
            }
            else{
                res.json({message: 'something went wrong'});
            }    

        }
        
    } catch (error) {
        res.json(error)
    }
}


const dashboard = async (req,res) =>{
    try {
       

            const data = await User.find().sort({ stars: -1 });

            if(data){
                res.json({user:data});
            }
            else{
                res.json({message: 'something went wrong'});
            }    

        
        
    } catch (error) {
        res.json(error)
    }
}



module.exports = {firstapi , createuser ,finduser , dashboard}; //export all the controllers declared above 