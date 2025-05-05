const express=require('express');
const cors=require('cors');
const pool=require('./db');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json());
app.get('/',async(req,res)=>{
    try{
    res.json("Welcome to HR API")
    }catch(err){
    res.status(500).json({Error:err.message});
    }
});
app.get('/emp',async(req,res)=>{
    try{
    const result=await pool.query('Select * from employees');
    res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/total',async(req,res)=>{
    try{
        const res1=await pool.query('Select Count(employee_id)  from employees');
        res.json(res1.rows)
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


const Port=process.env.PORT;
app.listen(Port,()=>{
    console.log(`Connect successfully to PORT ${Port}`);
});